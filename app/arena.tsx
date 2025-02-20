import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated, ActivityIndicator } from "react-native";

export default function Arena() {
  const rotateY = useRef(new Animated.Value(0)).current; // Controls the rotation

  useEffect(() => {
    // Sequence: Flip to the back (white), then flip to the front content
    Animated.sequence([
      // Flip to the back side (white background)
      Animated.timing(rotateY, {
        toValue: 0.5, // Flip halfway (180 degrees to show back)
        duration: 1000,
        useNativeDriver: true,
      }),
      // Flip back to show the front content
      Animated.timing(rotateY, {
        toValue: 1, // Full flip (to 360 degrees, showing front content)
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
    <View className="flex flex-col items-center justify-center h-screen bg-white px-2">
      <View className="w-[90%] h-[40%]   overflow-hidden">
        {/* Front Side Content */}
        <Animated.View
          style={{
            transform: [{ rotateY: frontRotateYInterpolation }],
            backfaceVisibility: "hidden", // Hide the back side during flip
          }}
          className="absolute top-0 left-0 w-full h-full border rounded-3xl bg-gray-200 "
        >
          <View className="flex items-center justify-center h-full">
            <ActivityIndicator size={50} color={"#003366"} />
          </View>
        </Animated.View>

        {/* Back Side - White Background */}
        <Animated.View
          style={{
            transform: [{ rotateY: backRotateYInterpolation }],
            backfaceVisibility: "hidden", // Hide the back face during flip
            backgroundColor: "gray", // White background for the back side
          }}
          className="absolute top-0 left-0 w-full h-full border rounded-3xl"
        >
          <View className="flex flex-col items-center justify-center w-full h-full bg-white">
            {/* Your front content */}
            <View className="flex flex-row items-start justify-start p-2 gap-2">
              <View className="relative w-32 h-14 border ">
                <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                  #01
                </Text>
                <Image
                  className="h-8 w-20 object-contain"
                  source={require("../assets/images/fusertech.jpg")}
                />
              </View>
              <View className="w-10 h-20 border">
                <Image
                  className="h-8 w-full object-contain"
                  source={require("../assets/images/unisex.gif")}
                />
              </View>
              <View className="relative w-32 h-14 border ">
                <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                  #02
                </Text>
                <Image
                  className="h-8 w-20 object-contain"
                  source={require("../assets/images/acz.png")}
                />
              </View>

              <View className="w-10 h-20 border">
                <Image
                  className="h-8 w-full object-contain"
                  source={require("../assets/images/unisex.gif")}
                />
              </View>
            </View>
            <View className="flex flex-row w-[93%] h-28 border m-3">
              <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                #03
              </Text>
              <Image
                className="h-full w-1/2 object-contain border"
                source={require("../assets/images/liquid.jpeg")}
              />
              <Text className="absolute top-0 right-[50%] text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                #04
              </Text>
              <Image
                className="h-full w-1/2 object-contain border"
                source={require("../assets/images/inno.jpeg")}
              />
            </View>
            <View className="flex flex-row items-start justify-start p-2 gap-2">
              <View className="relative w-32 h-14 border ">
                <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                  #05
                </Text>
                <Image
                  className="h-8 w-20 object-contain"
                  source={require("../assets/images/fusertech.jpg")}
                />
              </View>
              <View className="w-10 h-20 border">
                <Image
                  className="h-8 w-full object-contain"
                  source={require("../assets/images/unisex.gif")}
                />
              </View>
              <View className="relative w-32 h-14 border ">
                <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                  #06
                </Text>
                <Image
                  className="h-8 w-20 object-contain"
                  source={require("../assets/images/acz.png")}
                />
              </View>

              <View className="w-10 h-20 border">
                <Image
                  className="h-8 w-full object-contain"
                  source={require("../assets/images/unisex.gif")}
                />
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}
