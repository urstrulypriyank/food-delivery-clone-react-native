import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { urlFor } from "../sanity";
import { ArrowDownLeftIcon, ArrowLeftIcon } from "react-native-heroicons/solid";

export default function RestaurantScreen() {
  //  we require navigation object to navigate using stack screen
  const navigation = useNavigation();

  //   Here we can use useRoute() to get all the parameters which was passed as argument in

  const {
    params: {
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
    },
  } = useRoute();

  // Now we want to disable default header
  // so we can use useEffect with [] as secondArgument so it will only run once when the component will mount

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-64 bg-gray-300 p-4 relative"
        />
        <TouchableOpacity 
        className="absolute top-14 left-5 bg-gray-300 rounded-full p-2"
        onPress={()=>navigation.goBack() }
        >
          <ArrowLeftIcon 
            color="#00CCBB" 
            
             />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
