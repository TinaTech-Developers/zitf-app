import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#003366",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            ...styles.iosTabBar,
            backgroundColor: Colors[colorScheme ?? "light"].background,
            height: 70,
          },
          android: {
            ...styles.androidTabBar,
            backgroundColor: "white",
            borderTopWidth: 0.4,
            height: 70,
          },
          default: {},
        }),
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={32} name="house.fill" color={color} />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>{"Home"}</Text>,
        }}
      />
      <Tabs.Screen
        name="exhibitors"
        options={{
          title: "Exhibitors",
          tabBarIcon: ({ color }) => (
            <Ionicons size={32} name="people" color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color }}>{"Exhibitors"}</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color }) => (
            <Ionicons size={32} name="heart" color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color }}>{"Favourites"}</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <Ionicons size={32} name="map" color={color} />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>{"Map"}</Text>,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search", // Sets the title for the header
          headerShown: true, // Ensures the header is visible
          tabBarIcon: ({ color }) => (
            <Ionicons size={32} name="search" color={color} />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>{"Search"}</Text>,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iosTabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0,
    zIndex: 1000,
  },
  androidTabBar: {
    borderTopWidth: 1,
  },
});
