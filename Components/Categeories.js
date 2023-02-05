import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categeories() {
  return (
    <ScrollView horizontal>
        {/* Category card */}
        <CategoryCard/>
        {/* Caterogry text */}
      <Text>Categeories</Text>
    </ScrollView>
  )
}