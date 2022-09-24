import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './Login';
import HomeScreen from './Home';
const Stack = createNativeStackNavigator();
const NavigationHome = ({route,navigation}) => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='LoginScreen' component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
        
    )
}
export default NavigationHome; 