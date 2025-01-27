import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(tabs)" as any);
    }, 4000);
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/images/bg.jpg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          position: "absolute",
          width: "80%",
          height: "60%",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            color: "#003366",
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "Lato",
          }}
        >
          WELCOME{"\n"}TO
        </Text>
        <Image
          source={require("../../assets/images/ZITF-logo.png")}
          style={{ width: 200, height: 120, objectFit: "contain" }}
        />
        <Text style={{ marginTop: 20, color: "#000" }}>LOADING...</Text>
      </View>
    </ImageBackground>
  );
}
