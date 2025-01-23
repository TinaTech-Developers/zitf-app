import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { useRouter } from "expo-router";

interface ExhibitorLinksProps {
  heading: string;
  link: string; // Allow any string for dynamic routing
}

export default function EventsLinks({ heading, link }: ExhibitorLinksProps) {
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
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{heading}</Text>
      <Ionicons size={20} name="chevron-forward" color="black" />
    </TouchableOpacity>
  );
}
