import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";
import { urlFor } from "../sanity";

export default function Categeories() {
  const [categeories , setCategeories] = useState([])

  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == 'category']

    `).then((categoryObj)=> setCategeories(categoryObj))
  },[])
  // console.log(categeories)
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
      className="bg-slate-50 "
    >
      {/* Category card */}
     
      
      {categeories?.map( (categoryObj) => (
        <CategoryCard 
        key={categoryObj._id}
        title={categoryObj.name} imgUrl={urlFor(categoryObj.image).width(200).url()}/>
      ))}
     
    
      {/* Caterogry text */}
      
    </ScrollView>
  );
}
