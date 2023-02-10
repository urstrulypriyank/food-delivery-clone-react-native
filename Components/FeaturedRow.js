import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import React, { useEffect, useState } from "react";
import ResturantComponent from "./ResturantComponent";
import sanityClient from "../sanity";

export default function FeaturedRow({ id, title, description }) {
  const [resturants, setResturants] = useState([]);


  useEffect(() => {
    sanityClient
      .fetch(
        `
      
        *[_type == "featured" && _id == $id] {
          ...,
          resturant[]->{
            ...,
            dishes[]->,
            type-> {
              name
            
            }
          },
        }[0]`,
        {id}
      ).then(data => {
        setResturants(data?.resturant);
  })
  }, []);
  console.log(resturants);


  return (
    <View>
      <View className="mt-4 flex-row items-end justify-between mx-3">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-3">{description}</Text>

      {/* Horizontal scrollView */}
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-3"
      > 
      {/* Resturant & Dishes Card Component*/}

       
        

        {resturants?.map((obj) => (
          <ResturantComponent
          key={obj._id}
          id={obj._id}
          imgUrl={obj.Image}
          title={obj.name}
          rating={obj.rating}
          genre={obj.type?.name}
          address={obj.address}
          short_description={obj.short_description}
          dishes={obj.dishes}
          longitude={obj.longitude}
          latitude={obj.latitude}
          
          />
        ))}
        
     
      </ScrollView>
    </View>
  );
}
