import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface LinkCardProps {
  title: string;
  icon: any;
  link: any;
}

export default function LinkCard({ title, icon, link }: LinkCardProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.navigate(link)}
        className="flex flex-col items-center justify-center"
      >
        {icon}
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: "30%",
    height: "35%",
    backgroundColor: "#003366",
    borderColor: "#000",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,

    elevation: 10,
  },
  text: {
    textAlign: "center",
    color: "#fff",
  },
});
