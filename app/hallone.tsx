import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import FlipAnimation from "@/components/FlipAnimation";

export default function hallone() {
  return (
    <FlipAnimation>
      <View className="flex flex-col items-center justify-center h-screen bg-white px-2">
        <Image
          className="h-64 w-full object-contain absolute   "
          source={require("../assets/images/hall2.png")}
        />
      </View>
    </FlipAnimation>
  );
}
