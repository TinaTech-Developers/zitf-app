import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { useRouter } from "expo-router";

interface MyVisitLinksProps {
  heading: string;
  link: string; // Allow any string for dynamic routing
  icon: any;
}

export default function MyVisitLinks({
  heading,
  link,
  icon,
}: MyVisitLinksProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 16,
      }}
      onPress={() => router.push(link)}
    >
      <View className="flex flex-row items-center justify-center gap-2">
        {icon}
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{heading}</Text>
      </View>
      <Ionicons size={20} name="chevron-forward" color="black" />
    </TouchableOpacity>
  );
}
