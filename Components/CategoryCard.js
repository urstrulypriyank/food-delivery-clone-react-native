import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategoryCard(props) {
  return (
   

    <TouchableOpacity className=" mr-2 items-center  ">
      <Image
        source={require("../assets/Images/logo.png")}
       className="h-20 w-20 rounded opacity-60"
        ></Image>

      <Text className="absolute bottom-1 left-1 text-white font-bold ">{props.title}</Text>
    </TouchableOpacity>

  );
}
