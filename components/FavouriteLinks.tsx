import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { useRouter } from "expo-router";

interface FavouritesLinksProps {
  heading: string;
  link: string;
}

export default function FavouritesLink({
  heading,
  link,
}: FavouritesLinksProps) {
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
      onPress={() => router.navigate(link)}
    >
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{heading}</Text>

      <Ionicons size={20} name="chevron-forward" color="black" />
    </TouchableOpacity>
  );
}
