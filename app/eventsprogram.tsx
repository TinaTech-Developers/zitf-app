import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import EventsLinks from "@/components/EventsLinks";
import FlipAnimation from "@/components/FlipAnimation";

export default function eventsprogram() {
  return (
    <FlipAnimation>
      <SafeAreaView className="flex-1 -mt-8">
        <View className="flex-1  px-4 bg-white">
          <Header />
          <View className="flex flex-col items-center mt-4 ">
            <View className="w-[100%] h-[2px] bg-[#003366] my-4" />
            <EventsLinks
              heading="All Events by Date/Time"
              link="/allexhibitors"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <EventsLinks heading="Events By Category" link="/projectsgroups" />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <EventsLinks heading="What's next?" link="/industry" />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
          </View>
        </View>
      </SafeAreaView>
    </FlipAnimation>
  );
}
