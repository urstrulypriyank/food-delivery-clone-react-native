import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons to import from heroicons npm package
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categeories from "../Components/Categeories";
import FeaturedRow from "../Components/FeaturedRow";
import sanityClient from "../sanity";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  // we are setting defautl header to not to show
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      
      *[_type == "featured" ] {
        ...,
        resturant[]->{
          ...,
          dishes[]->,
         
        },
      }

      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  // console.log(featuredCategories)
  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      {/* VIEW-1  Header*/}
      <View>
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={require("../assets/Images/logo.png")}
            className="h-7 w-7 bg-gray-400 rounded-full"
          />
          {/* deliver now and current Location */}
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl ">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          {/* User Icon */}
          <View>
            <UserIcon size={25} color="#00CCBB" />
          </View>
        </View>
      </View>

      {/* VIEW-2  search */}

      <View className="flex-row items-center pb-2 mx-4">
        <View className="flex-1 flex-row  space-x-2 bg-gray-200 p-3 mx-2">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Resturants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB"></AdjustmentsVerticalIcon>
      </View>

      {/* Body Scroll VIew */}

      <ScrollView className="bg-gray-100">
        {/* Catageories compontens */}

        <Categeories />

        {/* Featured food row horizontal  */}

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            // featuredCategory={category.featuredCategories}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
