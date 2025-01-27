import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import {
  PinchGestureHandler,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const MapScreen: React.FC = () => {
  const router = useRouter();
  const [scale, setScale] = useState(new Animated.Value(1));

  // Handler for pinch gesture
  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: scale } }],
    { useNativeDriver: true }
  );

  const onPinchHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      Animated.spring(scale, {
        toValue: event.nativeEvent.scale,
        friction: 4,
        useNativeDriver: true,
      }).start();
    }
  };

  // Handler for the button click
  const handleButtonPress = (): void => {
    alert("Button clicked!");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Wrap everything in GestureHandlerRootView */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Site Map</Text>
        <Ionicons size={20} name="location-outline" color="white" />
      </View>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PinchGestureHandler
          onGestureEvent={onPinchGestureEvent}
          onHandlerStateChange={onPinchHandlerStateChange}
        >
          <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
            <View style={styles.wrapper}>
              {/* hall 4 */}
              <TouchableOpacity
                style={styles.button}
                onPress={handleButtonPress}
              ></TouchableOpacity>
              {/* hall 3 */}
              <TouchableOpacity
                style={styles.button1}
                onPress={() => router.push("/hallthree")}
              ></TouchableOpacity>{" "}
              {/* hall 1 */}
              <TouchableOpacity
                style={styles.button8}
                onPress={() => router.push("/hallone")}
              ></TouchableOpacity>
              {/* arena */}
              <TouchableOpacity
                style={styles.button2}
                onPress={() => router.push("/arena")}
              ></TouchableOpacity>
              {/* hall 5 */}
              <TouchableOpacity
                style={styles.button3}
                onPress={() => router.navigate("/hallfive")}
              ></TouchableOpacity>
              {/* nb */}
              <TouchableOpacity
                style={styles.button4}
                onPress={handleButtonPress}
              ></TouchableOpacity>
              {/* BBb */}
              <TouchableOpacity
                style={styles.button5}
                onPress={handleButtonPress}
              ></TouchableOpacity>
              {/* AAb */}
              <TouchableOpacity
                style={styles.button6}
                onPress={handleButtonPress}
              ></TouchableOpacity>
              {/* Zb */}
              <TouchableOpacity
                style={styles.button7}
                onPress={handleButtonPress}
              ></TouchableOpacity>
              {/* large btn */}
              <TouchableOpacity
                style={styles.button9}
                onPress={() => router.navigate("/large")}
              ></TouchableOpacity>
              {/* Image section */}
              {/* https://m8e8s75it9.ufs.sh/f/DOn1aY0zPecSsO9KhPu5v7oMSlkRjq3gWXmYKsVZCu4bPwiF */}
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../assets/images/layout.png")}
                  style={styles.image}
                  resizeMode="contain" // Ensures the image doesn't stretch or compress
                />
              </View>
            </View>
          </Animated.View>
        </PinchGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#003366",
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapper: {
    flex: 1,
    marginTop: 10,
    padding: 7,
    backgroundColor: "white",
  },
  button: {
    position: "absolute",
    top: 414,
    left: "69%",
    marginLeft: -75,
    paddingVertical: 15,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 45,
    width: 48,
    transform: [{ rotate: "-27deg" }],
  },
  button1: {
    position: "absolute",
    top: 362,
    left: "81%",
    marginLeft: -75,
    paddingVertical: 15,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 45,
    width: 38,
    transform: [{ rotate: "-30deg" }],
  },
  button2: {
    position: "absolute",
    top: 500,
    left: "89%",
    marginLeft: -75,
    paddingVertical: 15,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 50,
    width: 70,
    transform: [{ rotate: "-32deg" }],
  },
  button3: {
    position: "absolute",
    top: 455,
    left: "87%",
    marginLeft: -75,
    paddingVertical: 15,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 35,
    width: 20,
    transform: [{ rotate: "-32deg" }],
  },
  button4: {
    position: "absolute",
    top: 453,
    left: "95.5%",
    marginLeft: -75,
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 1,
    zIndex: 10,
    height: 10,
    width: 30,
    transform: [{ rotate: "-32deg" }],
  },
  button5: {
    position: "absolute",
    top: 431,
    left: "93.5%",
    marginLeft: -75,
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 24,
    width: 30,
    transform: [{ rotate: "-32deg" }],
  },
  button6: {
    position: "absolute",
    top: 397,
    left: "89%",
    marginLeft: -75,
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 20,
    width: 30,
    transform: [{ rotate: "-32deg" }],
  },
  button7: {
    position: "absolute",
    top: 410,
    left: "84%",
    marginLeft: -75,
    backgroundColor: "",
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 25,
    width: 15,
    transform: [{ rotate: "-32deg" }],
  },
  button8: {
    position: "absolute",
    top: 160,
    left: "82%",
    marginLeft: -75,
    paddingVertical: 15,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 55,
    width: 20,
  },
  button9: {
    position: "absolute",
    top: 190,
    left: "102%",
    marginLeft: -75,
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 200,
    width: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    top: 20,
    width: "100%",
    height: "100%", // Fixed height
    borderRadius: 10, // Optional: rounded corners for the image
  },
});

export default MapScreen;
