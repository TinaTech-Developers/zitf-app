import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import LinkCard from "@/components/LinkCards";
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 mt-10 p-4 bg-white">
        <Header />
        <View className="flex flex-row items-center mt-4">
          <TextInput
            placeholder="Type here"
            className="flex-4 h-12 border border-[#003366] px-3 text-black w-[84%] mr-4"
          />

          <Fontisto name="email" size={50} color="#003366" />
        </View>
        <View className="flex flex-row gap-4 flex-wrap mt-10">
          <LinkCard
            icon={<Ionicons size={45} name="people" color={"white"} />}
            title="Exhibitors"
            link={"/exhibitors"}
          />
          <LinkCard
            icon={<Ionicons size={45} name="calendar" color="white" />}
            title="Event Program"
            link={"/eventsprogram"}
          />
          <LinkCard
            icon={<Ionicons size={45} name="navigate-circle" color="white" />}
            title="Solution Tours"
            link={"/solutiontours"}
          />
          <LinkCard
            icon={<Ionicons size={45} name="rocket" color={"white"} />}
            title="Start-ups"
            link={"/startups"}
          />
          <LinkCard
            icon={<Ionicons size={45} name="location" color={"white"} />}
            title="Map"
            link={"/map"}
          />
          <LinkCard
            icon={
              <Ionicons size={45} name="checkmark-circle" color={"white"} />
            }
            title="Your Visit"
            link={"/myvisit"}
          />
        </View>
        <View className="flex flex-row gap-4 items-center justify-center ">
          <View className="w-[30%] h-[7.67rem] bg-white border border-gray-400 text-black">
            1
          </View>
          <View className="w-[30%] h-[7.67rem] bg-white border border-gray-400">
            1
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
