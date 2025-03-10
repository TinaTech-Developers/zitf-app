import React, { useEffect, useState } from "react";
import { View, Text, Button, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

// Define the type for the region object
interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function tssozitf() {
  const [region, setRegion] = useState<Region | null>(null); // `region` can be `null` initially
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Coordinates for ZITF
  const destination = {
    latitude: -20.167960981274604,
    longitude: 28.58593227523344,
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Check if location services are enabled
        const locationServicesEnabled =
          await Location.hasServicesEnabledAsync();
        if (!locationServicesEnabled) {
          setErrorMsg("Location services are disabled.");
          return;
        }

        // Request location permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied.");
          return;
        }

        // Get current location
        let location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } catch (error) {
        setErrorMsg("Error retrieving location. Please try again.");
        console.error(error); // Log the error to debug
      }
    };

    fetchLocation();
  }, []);

  const openGoogleMaps = () => {
    if (region) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${region.latitude},${region.longitude}&destination=${destination.latitude},${destination.longitude}&travelmode=driving`;
      Linking.canOpenURL(url)
        .then((supported) => {
          if (supported) {
            Linking.openURL(url);
          } else {
            setErrorMsg("Unable to open Google Maps.");
          }
        })
        .catch((error) => {
          setErrorMsg("Error opening URL: " + error.message);
        });
    } else {
      setErrorMsg("Cannot open directions without a valid location.");
    }
  };

  if (!region) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading your location...</Text>
        {errorMsg && <Text>{errorMsg}</Text>}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Get directions to ZITF
      </Text>
      <MapView
        style={{ width: "90%", height: "85%", margin: 10 }}
        region={region}
        showsUserLocation
        followsUserLocation
      >
        <Marker coordinate={region} title="You are here" />
        <Marker coordinate={destination} title="ZITF" />
      </MapView>
      <Button title="Navigate to ZITF" onPress={openGoogleMaps} />
    </View>
  );
}
