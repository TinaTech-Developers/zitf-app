import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import Animated from "react-native-reanimated";
// Import Firebase authentication methods
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/src/firebase/firebaseConfig";
// Import useRouter for navigation
import { useRouter } from "expo-router";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [email, setEmail] = useState<string | null>(null); // Allow string or null for email
  const router = useRouter(); // useRouter hook for navigation

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  // Close drawer manually from inside
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  // Fetch user's email on mount and update it
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email); // Set the user's email
      } else {
        setEmail(null); // If no user, set email to null
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  // Sign out function
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out!");
      setEmail(null); // Clear email state upon sign out
      router.push("/login"); // Redirect to the login page after sign out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Drawer animation */}
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [
              {
                translateX: drawerOpen ? 0 : 250, // Drawer sliding in/out
              },
            ],
            opacity: drawerOpen ? 1 : 0, // Fading in/out
            height: "100%",
            marginTop: "10%",
            width: "60%",
            borderWidth: 2,
          },
        ]}
      >
        <View style={styles.drawerContent}>
          <Ionicons
            className="mt-10"
            name="person-circle-outline"
            size={84}
            color="black"
          />
          {email && (
            <Text style={{ marginTop: 10, fontSize: 18, color: "#333" }}>
              {email}
            </Text>
          )}
          <TouchableOpacity
            onPress={handleSignOut} // Handle sign-out action
            style={styles.signOutButton}
          >
            <Text style={styles.signOutText}>Sign Out</Text>
            <MaterialIcons name="logout" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Open Button: Positioned at top left when drawer is closed */}
      {!drawerOpen && (
        <TouchableOpacity
          onPress={toggleDrawer}
          style={[styles.drawerButton, { left: "90%", top: 40 }]} // Positioned top-left on the screen
        >
          <Ionicons
            className="bg-white border"
            name="chevron-back"
            size={32}
            color="#003366"
          />
        </TouchableOpacity>
      )}

      {/* Close Button: Positioned at top left inside the drawer when open */}
      {drawerOpen && (
        <TouchableOpacity
          onPress={toggleDrawer}
          style={[styles.drawerButton, { left: "31%", top: 40 }]} // Positioned inside top-left of the drawer
        >
          <Ionicons
            className="bg-white border"
            name="chevron-forward"
            size={32}
            color="#003366"
          />
        </TouchableOpacity>
      )}

      {/* Tab Bar */}
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
            title: "Search",
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <Ionicons size={32} name="search" color={color} />
            ),
            tabBarLabel: ({ color }) => (
              <Text style={{ color }}>{"Search"}</Text>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  drawerButton: {
    marginTop: 30,
    position: "absolute",
    zIndex: 1000,
  },
  drawer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 250,
    height: "100%",
    backgroundColor: "white",
    borderLeftWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    zIndex: 1000,
    elevation: 10,
  },
  drawerContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "40%",
    gap: 10,
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  signOutText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});
