import React from "react";
import { View, Image, Text } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80, // 80px in React Native
        width: "100%",
      }}
    >
      <Image
        source={require("../assets/images/ZITF-logo.png")} // Use the correct relative path
        style={{ width: 120, height: 40, objectFit: "cover" }} // Apply width and height directly using style
      />
      {/* <Text style={{ fontSize: 36, color: "#003366" }}>SKYSTIPE</Text> */}
    </View>
  );
}
