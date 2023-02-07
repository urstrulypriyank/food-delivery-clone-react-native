import { View, Text, ScrollView } from 'react-native'
import {ArrowRightIcon} from "react-native-heroicons/outline";
import React from 'react'
import ResturantComponent from './ResturantComponent';

export default function FeaturedRow({id,title,description,}) {
  return (
    <View>
    <View className="mt-4 flex-row items-end justify-between mx-3">

      <Text className='font-bold text-lg'>{title}</Text>
      <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className="text-xs text-gray-500 px-3">{description}</Text>  
      
      {/* Horizontal scrollView */}
    <ScrollView horizontal
      contentContainerStyle={
        {
          paddingHorizontal: 15,

        }
      }
    showsHorizontalScrollIndicator={false}
    className="pt-3"
    />
{/* Resturant & Dishes Card Component*/}

      <ResturantComponent 
      
      
      id="123"
      imgUrl="https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'"
      title="swaad"
      rating="4"
      genre="IndiPureVeg"
      address="DB mall Bhopal"
      shortDescription="Serving you from new to oldest and forgotten recipies for more than 200 years"
      dishes={{

        1: "dish 1",
        2: "dish 2",
        3: "dish 3",
        4: "dish 4",
        
      }}
      longitude="20"
      latitude="0"


      />

    
    </View>
  )
}