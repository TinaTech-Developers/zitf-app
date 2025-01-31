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
  Dimensions,
} from "react-native";
import {
  PinchGestureHandler,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

// Determine if the screen is large enough to be considered a tablet
const isLargeScreen = width > 600;

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
      <View style={isLargeScreen ? styles.headerTablet : styles.header}>
        <Text
          style={isLargeScreen ? styles.headerTextTablet : styles.headerText}
        >
          Site Map
        </Text>
        <Ionicons size={20} name="location-outline" color="white" />
      </View>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PinchGestureHandler
          onGestureEvent={onPinchGestureEvent}
          onHandlerStateChange={onPinchHandlerStateChange}
        >
          <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
            <View style={isLargeScreen ? styles.wrapperTablet : styles.wrapper}>
              {/* hall 4 */}
              <TouchableOpacity
                style={isLargeScreen ? styles.buttonTablet : styles.button}
                onPress={() => router.navigate("/hallfour")}
              ></TouchableOpacity>
              {/* hall 3 */}
              <TouchableOpacity
                style={isLargeScreen ? styles.button1Tablet : styles.button1}
                onPress={() => router.push("/hallthree")}
              ></TouchableOpacity>
              {/* hall 1 */}
              <TouchableOpacity
                style={isLargeScreen ? styles.button8Tablet : styles.button8}
                onPress={() => router.push("/hallone")}
              ></TouchableOpacity>
              {/* arena */}
              <TouchableOpacity
                style={isLargeScreen ? styles.button2Tablet : styles.button2}
                onPress={() => router.push("/arena")}
              ></TouchableOpacity>
              {/* hall 5 */}
              <TouchableOpacity
                style={isLargeScreen ? styles.button3Tablet : styles.button3}
                onPress={() => router.navigate("/hallfive")}
              ></TouchableOpacity>
              {/* nb */}

              {/* BBb */}

              {/* AAb */}

              {/* Zb */}

              {/* large btn */}

              {/* Image section */}
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../assets/images/layout.png")}
                  style={isLargeScreen ? styles.imageTablet : styles.image}
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
  headerTablet: {
    backgroundColor: "#003366",
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerTextTablet: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  wrapper: {
    flex: 1,
    marginTop: 10,
    padding: 7,
    backgroundColor: "white",
  },
  wrapperTablet: {
    flex: 1,
    marginTop: 10,
    padding: 15,
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
    // backgroundColor: "red",
  },
  buttonTablet: {
    position: "absolute",
    top: 683,
    left: "57.5%",
    marginLeft: -75,
    paddingVertical: 20,
    paddingHorizontal: 4,
    borderRadius: 5,
    zIndex: 10,
    height: 78,
    width: 78,
    transform: [{ rotate: "-27deg" }],
    // backgroundColor: "red",
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
    // backgroundColor: "red",
  },
  button1Tablet: {
    position: "absolute",
    top: 585,
    left: "69%",
    marginLeft: -75,
    paddingVertical: 20,
    paddingHorizontal: 4,
    borderRadius: 5,
    zIndex: 10,
    height: 80,
    width: 62,
    transform: [{ rotate: "-30deg" }],
    // backgroundColor: "red",
  },
  button2: {
    position: "absolute",
    top: 516,
    left: "89.5%",
    marginLeft: -75,
    paddingVertical: 15,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 50,
    width: 70,
    transform: [{ rotate: "-32deg" }],
  },
  button2Tablet: {
    position: "absolute",
    top: 839,
    left: "76%",
    marginLeft: -75,
    paddingVertical: 15,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 88,
    width: 115,
    transform: [{ rotate: "-32deg" }],
    // backgroundColor: "red",
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
    // backgroundColor: "red",
  },
  button3Tablet: {
    position: "absolute",
    top: 745,
    left: "73.5%",
    marginLeft: -75,
    paddingVertical: 15,
    paddingHorizontal: 2,

    zIndex: 10,
    height: 50,
    width: 32,
    transform: [{ rotate: "-32deg" }],
    // backgroundColor: "yellow",
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
    // backgroundColor: "red",
  },
  button4Tablet: {
    position: "absolute",
    top: 653,
    left: "95.5%",
    marginLeft: -75,
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 1,
    zIndex: 10,
    height: 10,
    width: 30,
    transform: [{ rotate: "-32deg" }],
    // backgroundColor: "yellow",
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
    // backgroundColor: "red",
  },
  button5Tablet: {},
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
    // backgroundColor: "red",
  },
  button6Tablet: {},
  button7: {
    position: "absolute",
    top: 410,
    left: "84%",
    marginLeft: -75,
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 25,
    width: 15,
    transform: [{ rotate: "-32deg" }],
    // backgroundColor: "red",
  },
  button7Tablet: {},
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
  button8Tablet: {
    position: "absolute",
    top: 219,
    left: "68.7%",
    marginLeft: -75,
    paddingVertical: 15,
    paddingHorizontal: 2,
    borderRadius: 5,
    zIndex: 10,
    height: 105,
    width: 35,
    // backgroundColor: "red",
    transform: [{ rotate: "-12deg" }],
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
    // backgroundColor: "red",
  },

  // Image styles for tablet (larger screens)
  imageTablet: {
    top: 20,
    width: "100%",
    height: "100%", // Adjust height for larger screens
    borderRadius: 10,
  },

  button9Tablet: {
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
    backgroundColor: "red",
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
    height: "100%", // Fixed height for smaller screens
    borderRadius: 10, // Optional: rounded corners for the image
  },
});

export default MapScreen;
