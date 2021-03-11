/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBarHeightContext,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import OptionScreen from './src/screens/OptionScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{activeTintColor: '#0000FF'}}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Options"
            component={OptionScreen}
            options={{
              tabBarLabel: 'Options',
              tabBarIcon: ({color, size}) => (
                <IIcon name="menu" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{
              tabBarLabel: 'About',
              tabBarIcon: ({color, size}) => (
                <Icon name="info" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => (
                <Icon name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
