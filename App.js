import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import SignIn from "../boatRentalApp/components/login";
// import SignUp from "../components/SignUp";
import Home from "../boatRentalApp/components/Home";
import { Background } from '@react-navigation/elements';
import TabBar from 'react-native-custom-navigation-tabs';

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: [
            {
              display: "flex",
              backgroundColor: '#BBE9FF',
              height: 60,
            },
            null
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName  = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const screens = {
  SignInScreen: {
      screen: SignIn,
  },
  // SignUpScreen: {
  //     screen: SignUp,
  // },
  HomeScreen: {
      screen: HomeTabs,
  }
}
const homeStack = createStackNavigator(
  screens,
  {
      defaultNavigationOptions: {
          headerShown: false, 
      },
  },
  {initialRouteName: 'SignUpScreen'}
  );

export default createAppContainer(homeStack);
