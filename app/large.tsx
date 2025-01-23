import { View, Text, Image } from "react-native";
import React from "react";

export default function large() {
  return (
    <View className="flex flex-col items-center justify-center h-screen bg-white px-2">
      <Image
        style={{
          width: "170%", // Ensures the image takes up the full width of the container
          height: "100%", // Ensures the image takes up the full height of the container
          position: "absolute",
          transform: [{ rotate: "90deg" }], // Correct rotation method
        }}
        source={require("../assets/images/lg.png")}
        resizeMode="contain" // Ensures the whole image is visible without cropping
      />
    </View>
  );
}
