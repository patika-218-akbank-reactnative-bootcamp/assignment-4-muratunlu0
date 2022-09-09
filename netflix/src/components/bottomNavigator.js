import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './Home';
import SearchScreen from './Search';
import ProfileStackNavigator from './profileNavigator';

const BottomNav = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <BottomNav.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <BottomNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarIcon: tabInfo => {
            return (
              <AntDesign
                name="home"
                size={20}
                color={tabInfo.focused ? 'white' : '#8e8e93'}
              />
            );
          },
          headerTitle: 'Netflix',
          headerTintColor: '#d90914',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
      <BottomNav.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarIcon: tabInfo => {
            return (
              <AntDesign
                name="search1"
                size={20}
                color={tabInfo.focused ? 'white' : '#8e8e93'}
              />
            );
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
      <BottomNav.Screen
        name="Profile"
        options={{
          tabBarActiveTintColor: 'white',
          tabBarIcon: tabInfo => {
            return (
              <AntDesign
                name="user"
                size={20}
                color={tabInfo.focused ? 'white' : '#8e8e93'}
              />
            );
          },
          headerShown: false,
        }}
        component={ProfileStackNavigator}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigator;
