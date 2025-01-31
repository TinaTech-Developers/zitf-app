import { View, Text, Image } from "react-native";
import React from "react";

export default function hallfour() {
  return (
    <View className="flex flex-col items-center justify-center h-screen bg-white px-2">
      <View className="w-[90%] h-[40%] border  bg-gray-200 ">
        <View className="flex flex-row items-start justify-start p-2 gap-2">
          <View className="w-10 h-20 border">
            <Image
              className="h-8 w-full object-contain"
              source={require("../assets/images/unisex.gif")}
            />
          </View>
          <View className="relative w-[73px] h-10 border ">
            <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
              #01
            </Text>
            <Image
              className="h-8 w-20 object-contain"
              source={require("../assets/images/fusertech.jpg")}
            />
          </View>
          <View className="relative w-[73px] h-10 border ">
            <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
              #02
            </Text>
            <Image
              className="h-8 w-20 object-contain"
              source={require("../assets/images/acz.png")}
            />
          </View>
          <View className="relative w-[73px] h-10 border ">
            <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
              #03
            </Text>
            <Image
              className="h-8 w-20 object-contain"
              source={require("../assets/images/zida.jpeg")}
            />
          </View>
          <View className="w-10 h-20 border">
            <Image
              className="h-8 w-full object-contain"
              source={require("../assets/images/unisex.gif")}
            />
          </View>
        </View>
        <View className="flex flex-row w-[93%] h-28 border m-3">
          <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
            #04
          </Text>
          <Image
            className="h-full w-1/2 object-contain border"
            source={require("../assets/images/liquid.jpeg")}
          />
          <Text className="absolute top-0 right-[50%] text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
            #05
          </Text>
          <Image
            className="h-full w-1/2 object-contain border"
            source={require("../assets/images/inno.jpeg")}
          />
        </View>
        <View className="flex flex-row items-end justify-start p-2 gap-2">
          <View className="w-10 h-20 border">
            <Image
              className="h-8 w-full object-contain"
              source={require("../assets/images/unisex.gif")}
            />
          </View>

          <View className="relative w-[73px] h-10 border ">
            <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
              #04
            </Text>
            <Image
              className="h-8 w-20 object-contain"
              source={require("../assets/images/creative.png")}
            />
          </View>
          <View className="relative w-[73px] h-10 border ">
            <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
              #04
            </Text>
            <Image
              className="h-8 w-20 object-contain"
              source={require("../assets/images/tinasoft.png")}
            />
          </View>
          <View className="relative w-[73px] h-10 border ">
            <Text className="absolute top-0 right-0 text-[0.4rem] font-bold text-white bg-gray-600 px-2 py-1 z-10 rotate-90 translate-x-1 translate-y-1">
              #04
            </Text>
            <Image
              className="h-8 w-20 object-contain"
              source={require("../assets/images/Agribank.png")}
            />
          </View>
          <View className="w-10 h-20 border">
            <Image
              className="h-8 w-full object-contain"
              source={require("../assets/images/unisex.gif")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
