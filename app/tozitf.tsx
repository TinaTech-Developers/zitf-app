import React, { useEffect, useState } from "react";
import { View, Text, Button, Platform, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function tozitf() {
  const [region, setRegion] = useState<any>(null); // Use `any` type for simplicity
  const [errorMsg, setErrorMsg] = useState("");

  // Coordinates for ZITF
  const destination = {
    latitude: -20.167960981274604,
    longitude: 28.58593227523344,
  };

  useEffect(() => {
    (async () => {
      // Ask for permission if needed
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        // Get current location
        let location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } catch (error) {
        // Error retrieving location
        setErrorMsg("Error retrieving location. Please try again.");
      }
    })();
  }, []);

  const openGoogleMaps = () => {
    if (region) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${region.latitude},${region.longitude}&destination=${destination.latitude},${destination.longitude}&travelmode=driving`;
      Linking.openURL(url);
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
      <Text className="text-2xl font-bold mx-4">Get directions to ZITF</Text>
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
