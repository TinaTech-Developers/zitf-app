// app/favourites.tsx
import FavouritesLink from '@/components/FavouriteLinks';
import Header from '@/components/Header';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

export default function FavouritesScreen() {
  return (
    <SafeAreaView className="flex-1">
          <View className="flex-1 mt-10 p-4 bg-white">
     <Header/>
              <View className='flex flex-col items-center mt-4'>
                  <View className="w-[100%] h-[2px] bg-[#003366] my-1" />
                  <FavouritesLink heading='My Exhibitors (0)' />
                  <View className="w-[100%] h-[2px] bg-[#003366] my-1" />
                  <FavouritesLink heading='My Events (0)' />
                  <View className="w-[100%] h-[2.5px] bg-[#003366] my-1" />
          <FavouritesLink heading='Route Planner (0)' />
          <View className="w-[100%] h-[2px] bg-[#003366] my-1" />
              </View>
              </View>
          </SafeAreaView>
  );
}
