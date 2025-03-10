import ExhibitorLinks from "@/components/ExhibitorLinks";
import Header from "@/components/Header";

import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";

export default function ExhibitorsScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 mt-10 p-4 bg-white">
        <Header />
        <ScrollView className="flex-1">
          <View className="flex flex-col items-center mt-4">
            <View className="w-full h-[2px] bg-[#003366] my-4" />
            <ExhibitorLinks heading="Exhibitor A - Z" link="/allexhibitors" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks heading="Project Groups" link="/projectsgroups" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks
              heading="Industry / Sector Solutions"
              link="/industry"
            />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks heading="Solutions" link="/solutions" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks heading="Start-ups" link="/startups" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks heading="Product & Services" link="/products" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks heading="Who is Who" link="/whoiswho" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks heading="Press Information" link="/pressinfo" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks heading="Product & Services" link="/products" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks heading="Who is Who" link="/whoiswho" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
            <ExhibitorLinks heading="Press Information" link="/pressinfo" />
            <View className="w-full h-[2px] bg-[#003366] my-2" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
