import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { useRouter } from "expo-router";

export default function hallfive() {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarAnimation] = useState(new Animated.Value(0)); // Controls Snackbar visibility
  const [imageAnimations] = useState(Array(12).fill(new Animated.Value(0))); // Controls image pop-in animation

  const router = useRouter();

  // Function to handle Image click
  const handleImageClick = (message: string) => {
    setSnackbarMessage(message); // Set the message for the Snackbar
    setSnackbarVisible(true); // Show the Snackbar

    // Animate the Snackbar in
    Animated.timing(snackbarAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      // Animate the Snackbar out
      Animated.timing(snackbarAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setTimeout(() => setSnackbarVisible(false), 300);
    }, 3000);
  };

  // Pop-in animation for the images with slower speed
  useEffect(() => {
    imageAnimations.forEach((animation) => {
      Animated.spring(animation, {
        toValue: 1,
        friction: 10, // Increased friction to slow the bounce effect
        tension: 40, // Adjusted tension to slow down the speed
        useNativeDriver: true,
      }).start();
    });
  }, []);

  return (
    <View className="flex flex-col items-center justify-center h-screen bg-white px-2">
      <Image
        className="h-64 w-full object-contain absolute"
        source={require("../assets/images/hall5.png")}
      />

      <View className="flex flex-row items-center justify-center gap-4 -translate-y-10 -translate-x-4 w-full">
        {/* Image 1 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on ZIDA!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[0] }],
              opacity: imageAnimations[0],
            }}
          >
            <View className="relative w-[73px] h-10 border ">
              <Text className="absolute top-0 leftt-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10  ">
                #001
              </Text>
              <Image
                className="h-8 w-20 object-contain"
                source={require("../assets/images/zida.jpeg")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Image 2 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on ZIDA!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[1] }],
              opacity: imageAnimations[1],
            }}
          >
            <View className="relative w-[73px] h-10 border ">
              <Text className="absolute top-0 leftt-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10  ">
                #002
              </Text>
              <Image
                className="h-8 w-20 object-contain"
                source={require("../assets/images/tinasoft.png")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Image 3 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on ZITF")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[2] }],
              opacity: imageAnimations[2],
            }}
          >
            <View className="relative w-[73px] h-10 border ">
              <Text className="absolute top-0 leftt-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10  ">
                #004
              </Text>
              <Image
                className="h-8 w-20 object-contain"
                source={require("../assets/images/ZITF-logo.png")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Image 4 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on SKYSTIPE!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[3] }],
              opacity: imageAnimations[3],
            }}
          >
            <View className="relative w-[73px] h-10 border ">
              <Text className="absolute top-0 leftt-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10  ">
                #004
              </Text>
              <Text className="text-blue-950 text-center bg-white py-1">
                SKYSTIPE
              </Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row items-center justify-center gap-4 -left-[65px] -translate-y-1 w-[70%]">
        {/* Image 5 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on ZITF-logo!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[4] }],
              opacity: imageAnimations[4],
            }}
          >
            <View className="relative w-[73px] h-10 border -rotate-90">
              <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                #01
              </Text>
              <Image
                className="h-8 w-20 object-contain"
                source={require("../assets/images/ZITF-logo.png")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Image 6 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on TinaSoft!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[5] }],
              opacity: imageAnimations[5],
            }}
          >
            <View className="relative w-[73px] h-10 border -rotate-90">
              <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                #02
              </Text>
              <Image
                className="h-8 w-20 object-contain"
                source={require("../assets/images/tinasoft.png")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Image 7 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on SKYSTIPE!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[6] }],
              opacity: imageAnimations[6],
            }}
          >
            <View className="relative w-[73px] h-10 border -rotate-90">
              <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                #03
              </Text>
              <Text style={{ fontSize: 16, padding: 4, color: "#003366" }}>
                SKYSTIPE
              </Text>
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Image 8 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on ZIDA!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[7] }],
              opacity: imageAnimations[7],
            }}
          >
            <View className="relative w-[73px] h-10 border -rotate-90">
              <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                #04
              </Text>
              <Image
                className="h-8 w-20 object-contain"
                source={require("../assets/images/zida.jpeg")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Image 9 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on CZI!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[8] }],
              opacity: imageAnimations[8],
            }}
          >
            <View className="relative w-[73px] h-10 border -rotate-90">
              <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
                #05
              </Text>
              <Image
                className="h-8 w-20 object-contain"
                source={require("../assets/images/czi.jpg")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row items-center justify-center gap-4 -left-3 translate-y-10 w-[70%]">
        {/* Image 10 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on ZimTrade!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[9] }],
              opacity: imageAnimations[9],
            }}
          >
            <View className="relative items-center justify-center w-28 h-20 border ">
              <Text className="absolute top-0 left-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10  translate-x-1 translate-y-1">
                #1
              </Text>
              <Image
                className="h-12 w-20 object-contain"
                source={require("../assets/images/zimtrade.webp")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Image 11 */}
        <TouchableOpacity
          onPress={() => handleImageClick("You clicked on ZNCC!")}
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[10] }],
              opacity: imageAnimations[10],
            }}
          >
            <View className="relative items-center justify-center w-28 h-20 border ">
              <Text className="absolute top-0 left-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10  translate-x-1 translate-y-1">
                #2
              </Text>
              <Image
                className="h-12 w-20 object-contain"
                source={require("../assets/images/zncc.png")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Image 12 */}
        <TouchableOpacity
          onPress={() =>
            handleImageClick("You clicked on African Development Bank!")
          }
        >
          <Animated.View
            style={{
              transform: [{ scale: imageAnimations[11] }],
              opacity: imageAnimations[11],
            }}
          >
            <View className="relative items-center justify-center w-28 h-20 border ">
              <Text className="absolute top-0 left-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10  translate-x-1 translate-y-1">
                #3
              </Text>
              <Image
                className="h-12 w-20 object-contain"
                source={require("../assets/images/adb.jpg")}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Snackbar */}
      {snackbarVisible && (
        <Animated.View
          style={{
            position: "absolute",
            bottom: 70, // Adjust this to move the Snackbar up
            left: 20,
            right: 20,
            backgroundColor: "#003366",
            padding: 15,
            borderRadius: 5,
            opacity: snackbarAnimation, // Apply animation opacity
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            transform: [
              {
                translateY: snackbarAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {snackbarMessage}
          </Text>
          <Ionicons
            onPress={() => router.navigate("./allexhibitors")}
            size={20}
            name="location-outline"
            color="white"
            style={{ marginRight: 15 }}
          />
        </Animated.View>
      )}
    </View>
  );
}
