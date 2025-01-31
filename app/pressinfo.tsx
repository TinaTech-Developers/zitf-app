import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React from "react";

export default function pressinfo() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center p-4 bg-white">
        <ActivityIndicator size={60} color={"#003366"} />
      </View>
    </SafeAreaView>
  );
}
