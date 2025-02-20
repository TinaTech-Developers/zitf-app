import FlipAnimation from "@/components/FlipAnimation";
import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function tradefairhours() {
  return (
    <FlipAnimation>
      <ScrollView className="bg-white p-4">
        <View className="text-center mb-6">
          <Text className="text-3xl font-bold text-indigo-600">
            ZITF Opening Hours
          </Text>
          <Text className="text-lg text-gray-500 mt-2">
            Zimbabwe International Trade Fair
          </Text>
        </View>

        <View className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <Text className="text-xl font-semibold text-gray-700">
            Monday - Friday
          </Text>
          <Text className="text-lg text-gray-600">Opening: 9:00 AM</Text>
          <Text className="text-lg text-gray-600">Closing: 5:00 PM</Text>
        </View>

        <View className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <Text className="text-xl font-semibold text-gray-700">Saturday</Text>
          <Text className="text-lg text-gray-600">Opening: 10:00 AM</Text>
          <Text className="text-lg text-gray-600">Closing: 4:00 PM</Text>
        </View>

        <View className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <Text className="text-xl font-semibold text-gray-700">Sunday</Text>
          <Text className="text-lg text-gray-600">Closed</Text>
        </View>

        <View className="text-center mt-6">
          <Text className="text-sm text-gray-500">
            The timings above are subject to change. Please verify with official
            sources.
          </Text>
        </View>
      </ScrollView>
    </FlipAnimation>
  );
}
