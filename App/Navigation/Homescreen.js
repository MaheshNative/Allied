
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../Screens/Login'
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import User from '../Screens/User';



const HomeStack = createStackNavigator();

function Homescreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen name={'Signup'} component={Signup} />
            <HomeStack.Screen name={'Login'} component={LoginScreen} />
            <HomeStack.Screen name={'Home'} component={Home} />
            <HomeStack.Screen name={'User'} component={User} />




        </HomeStack.Navigator>

    );
}


export default Homescreen;