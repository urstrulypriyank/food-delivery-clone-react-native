// Resturnat card component

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
export default function ResturantComponent({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  longitude,
  latitude,
}) {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl }} className="h-36 w-64" />
      <View className="px-3 pb-3 ">
        
        <Text className="font-bold text-lg pt-2">{title}</Text>
        
        {/* View for rating and genre */}
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={20} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500"> 
            {rating}
            </Text>
            · {genre}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
