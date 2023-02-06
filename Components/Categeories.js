import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categeories() {
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
     
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 1" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 1" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 1" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 1" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 1" />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing 1" />
     
    
      {/* Caterogry text */}
      
    </ScrollView>
  );
}
