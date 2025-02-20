import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import FlipAnimation from "@/components/FlipAnimation";

export default function hall5() {
  const [loading, setLoading] = useState(true);

  return (
    <FlipAnimation>
      <View className="flex-1 bg-white">
        <View className="w-full bg-white p-2">
          <Image
            className="h-64 w-[100%] object-contain relative"
            source={require("../assets/images/robot.png")}
          />
          <View className="flex flex-col items-center justify-center w-40 h-40 absolute bg-white mt-36 m-2 rounded-full border-4 border-gray-400 ">
            <Image
              className="h-36 w-full object-cover relative rounded-full"
              source={require("../assets/images/tinasoft.png")}
            />
          </View>
        </View>

        <View className="mt-12 text-gray-300 px-2 w-full">
          <Text className="text-xl font-bold mb- text-white bg-blue-500 w-40 text-center px-2 rounded-t-lg ">
            Contact Details
          </Text>
          <View className="w-full h-[2px] bg-blue-500"></View>

          <View className="my-4">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex flex-row gap-4">
                <TouchableOpacity className="w-40 p-2 bg-green-500 rounded-lg h-11">
                  <Text className="text-center text-white text-xl">
                    whatsapp
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex flex-row items-center justify-center gap-4 w-40 p-2 bg-[#1877F2] rounded-lg h-11">
                  <Ionicons size={20} name="logo-facebook" color={"white"} />
                  <Text className="text-center text-white text-xl">
                    Facebook
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-40 p-2 bg-blue-500 rounded-lg h-11">
                  <Text className="text-center text-white text-xl">
                    Email us
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View className="mt-1 text-gray-300 px-2">
            <Text className="text-lg font-bold mb- text-white text-center bg-blue-500 w-56 px-2 rounded-t-lg ">
              About
            </Text>
            <View className="w-full h-[2px] bg-blue-500 mb-2"></View>
            <Text className="my-2 teext-black">
              TinaSoft NEXUS, located between Ruwa and Harare, provides a wide
              range of ICT services to support businesses. Our offerings include
              custom web development, cybersecurity solutions, hardware
              maintenance, secure network infrastructure, CCTV installation, and
              computer sales. Partner with us to enhance productivity, security,
              and operational efficiency in today's digital world.
            </Text>
          </View>

          <View className="mt-1 text-gray-300 px-2">
            <Text className="text-lg font-bold mb- text-white text-center bg-blue-500 w-56 px-2 rounded-t-lg ">
              Industry/Sector Solutions
            </Text>
            <View className="w-full h-[2px] bg-blue-500 mb-2"></View>
            <TouchableOpacity className="flex flex-row items-center justify-between h-10 mt-2">
              <Text className="text-black">ICT & Innovation</Text>
              <Ionicons size={20} name="chevron-forward" color="black" />
            </TouchableOpacity>
            <View className="w-full h-[1px] bg-gray-500"></View>
            <TouchableOpacity className="flex flex-row items-center justify-between h-10 mt-2 ">
              <Text className="text-black">Other</Text>
              <Ionicons size={20} name="chevron-forward" color="black" />
            </TouchableOpacity>
            <View className="w-full h-[1px] bg-gray-500 mb-5"></View>
          </View>
          <View className="mt-1 text-gray-300 px-2">
            <Text className="text-lg font-bold mb- text-white text-center bg-blue-500 w-56 px-2 rounded-t-lg ">
              Solutions
            </Text>
            <View className="w-full h-[2px] bg-blue-500 mb-2"></View>

            <Text className="text-gray-400 mb-5">Software</Text>
            <View className="w-full h-[1px] bg-black mb-"></View>
            <TouchableOpacity className="flex flex-row items-center justify-between  mt-">
              <Text className="text-black py-4">
                Enterprise Resource Planning (ERP) Software
              </Text>
              <Ionicons size={20} name="chevron-forward" color="black" />
            </TouchableOpacity>
            <View className="w-full h-[1px] bg-black mb-5"></View>
          </View>
          <View className="mt-1 text-gray-300 px-2">
            <Text className="text-lg font-bold mb- text-white text-center bg-blue-500 w-56 px-2 rounded-t-lg ">
              Location
            </Text>
            <View className="w-full h-[2px] bg-blue-500 mb-2"></View>

            <View style={{ height: 160, position: "relative" }}>
              {loading && (
                <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  style={{ position: "absolute", top: "50%", left: "50%" }}
                />
              )}
              <WebView
                style={{ flex: 1, width: "100%" }}
                originWhitelist={["*"]}
                source={{
                  html: `
      <html>
        <body style="margin: 0; padding: 0;">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3797.095545401205!2d31.24280487517643!3d-17.880985383092852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4942%20springvale%20park%20harare!5e0!3m2!1sen!2szw!4v1737447547017!5m2!1sen!2szw" 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </body>
      </html>`,
                }}
                onLoad={() => setLoading(false)} // Hide loader once WebView content is loaded
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </FlipAnimation>
  );
}
