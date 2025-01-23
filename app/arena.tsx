import { View, Text, Image } from "react-native";
import React from "react";

export default function arena() {
  return (
    <View className="flex flex-col items-center justify-center h-screen bg-white px-2">
      <Image
        className="h-64 w-full object-contain absolute   "
        source={require("../assets/images/arena.png")}
      />
    </View>
  );
}
