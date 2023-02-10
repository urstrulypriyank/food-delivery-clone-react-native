import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import RestaurantScreen from './Screens/RestaurantScreen';

// creating stack so that we can jump around diffrent view in stack 
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name="Home" ></Stack.Screen>
      <Stack.Screen component={RestaurantScreen} name="Restaurant" ></Stack.Screen>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}


