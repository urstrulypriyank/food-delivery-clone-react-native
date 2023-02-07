import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategoryCard(props) {
  return (
   

    <TouchableOpacity className=" mr-2 items-center  ">
      {/* <Image
        source={require("../assets/Images/logo.png")}
       className="h-20 w-20 rounded opacity-60"
        ></Image> */}
      <Image
        source={{uri: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'}}
       className="h-20 w-20 rounded "
        ></Image>

      <Text className="absolute bottom-1 left-1 text-white font-bold  ">{props.title}</Text>
    </TouchableOpacity>

  );
}
