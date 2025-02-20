import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
// import 'react-native-reanimated';
import "tailwindcss/tailwind.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import "../global.css";
import { Ionicons } from "@expo/vector-icons";
import ExhibitorScreen from "./exhibitorscreen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="splash" options={{ headerShown: false }} />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        <Stack.Screen
          name="allexhibitors"
          options={{
            title: "All Exhibitors",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="projectsgroups"
          options={{
            title: "Project Groups",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="industry"
          options={{
            title: "Sector Solutions",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="solutions"
          options={{
            title: "Solutions",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="startups"
          options={{
            title: "Start-Ups",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="products"
          options={{
            title: "Products & Services",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="whoiswho"
          options={{
            title: "Who is Who",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="pressinfo"
          options={{
            title: "Press Info",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="hallfive"
          options={{
            title: "HALL 5",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="location-outline"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="hallfour"
          options={{
            title: "HALL 4",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="location-outline"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="hall5"
          options={{
            title: "TinaSoft Nexus",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="location-outline"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="hallthree"
          options={{
            title: "HALL 3",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="location-outline"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="arena"
          options={{
            title: "ARENA",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="location-outline"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="hallone"
          options={{
            title: "HALL 1",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="location-outline"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="large"
          options={{
            title: "Sec",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="location-outline"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="eventsprogram"
          options={{
            title: "Events Program",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="calendar"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="solutiontours"
          options={{
            title: "Solution Tours",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="calendar"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="myvisit"
          options={{
            title: "Your Visit",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="calendar"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="tozitf"
          options={{
            title: "Your Visit",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="calendar"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="tradefairhours"
          options={{
            title: "Hours",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={20}
                name="calendar"
                color="white"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="favorites"
          options={{
            title: "My Exhibitors",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={30}
                name="heart"
                color="red"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="exhibitorscreen"
          options={{
            title: "Exhibitor Info",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                size={30}
                name="heart"
                color="red"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />

        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
