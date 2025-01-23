import ExhibitorLinks from "@/components/ExhibitorLinks";
import Header from "@/components/Header";
import MyVisitLinks from "@/components/MyVisit";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";

export default function MyVisit() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <View className="px-4 bg-white">
          <Header />
          <View className="flex flex-col items-center mt-4">
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <MyVisitLinks
              icon={<Ionicons name="time" size={20} />}
              heading="Opening Hours"
              link="/openinghours"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <MyVisitLinks
              icon={<Ionicons name="car" size={20} />}
              heading="Getting to ZITF Bulawayo "
              link="/tozitf"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <MyVisitLinks
              icon={<Ionicons name="bed" size={20} />}
              heading="Accommodation"
              link="/accommodation"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <MyVisitLinks
              icon={<Ionicons name="ticket" size={20} />}
              heading="Tickets and Prices"
              link="/tickets"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <MyVisitLinks
              icon={<Ionicons name="construct" size={20} />}
              heading="Services at the Trade Fair"
              link="/services"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <MyVisitLinks
              icon={<Ionicons name="star" size={20} />}
              heading="Rate App"
              link="/rateapp"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <MyVisitLinks
              icon={<Ionicons name="lock-closed" size={20} />}
              heading="Privacy Policy"
              link="/privacypolicy"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <MyVisitLinks
              icon={<Ionicons name="document" size={20} />}
              heading="Imprint"
              link="/imprint"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
            <MyVisitLinks
              icon={<Ionicons name="settings" size={20} />}
              heading="Settings"
              link="/settings"
            />
            <View className="w-[100%] h-[2px] bg-[#003366] my-2" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
