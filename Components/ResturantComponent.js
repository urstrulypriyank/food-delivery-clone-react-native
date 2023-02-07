// Resturnat card component

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
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
    <TouchableOpacity className="bg-white mr-3">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-3 ">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={20} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>· {genre}
          </Text>
        </View>
        <View className="flex-row space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
