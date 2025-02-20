// components/FlipAnimation.tsx (now using TypeScript)

import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated, ActivityIndicator } from "react-native";

// Type the 'children' prop as React.ReactNode
interface FlipAnimationProps {
  children: React.ReactNode;
}

const FlipAnimation: React.FC<FlipAnimationProps> = ({ children }) => {
  const rotateY = useRef(new Animated.Value(0)).current; // Controls the rotation

  useEffect(() => {
    // Sequence: Flip to blank side, then flip to content side
    Animated.sequence([
      // Flip to show the blank side (white background)
      Animated.timing(rotateY, {
        toValue: 0.5, // 180 degrees to show the back side
        duration: 1000,
        useNativeDriver: true,
      }),
      // Flip back to show the front side (content)
      Animated.timing(rotateY, {
        toValue: 1, // 360 degrees to show the front side with content
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [rotateY]);

  // Interpolations for front and back sides
  const frontRotateYInterpolation = rotateY.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"], // Front side rotates from 0 to 180
  });

  const backRotateYInterpolation = rotateY.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"], // Back side rotates from 180 to 360
  });

  return (
    <View className="flex flex-col items-center justify-center h-screen bg-white ">
      <View className="w-full h-full  bg-gray-200  overflow-hidden">
        {/* Front Side - Initially blank */}
        <Animated.View
          style={{
            transform: [{ rotateY: frontRotateYInterpolation }],
            backfaceVisibility: "hidden", // Hide the back face during flip
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <View className="flex items-center justify-center w-full h-full bg-white">
            <ActivityIndicator size={60} color={"#003366"} />
          </View>
        </Animated.View>

        {/* Back Side - Contains content (will be shown last) */}
        <Animated.View
          style={{
            transform: [{ rotateY: backRotateYInterpolation }],
            backfaceVisibility: "hidden", // Hide the back face during flip
            backgroundColor: "white", // White background for the back side
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Front content passed as children */}
          {children}
        </Animated.View>
      </View>
    </View>
  );
};

export default FlipAnimation;
