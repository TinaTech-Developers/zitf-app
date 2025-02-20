import React from "react";
import { Stack } from "expo-router"; // Import Stack from expo-router
import Toast from "react-native-toast-message"; // Import the Toast component

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="splash" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
      </Stack>

      {/* Toast container */}
      <Toast />
    </>
  );
}
