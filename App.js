/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Text, View, StatusBar,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Test from './screens/test';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import CustomSidebarMenu from './screens/CustomSidebarMenu';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  myDrawer = () => {

    return (

      <Drawer.Navigator initialRouteName="Home"
      //   drawerContent={(props) => <CustomSidebarMenu {...props}
      //   />}
      >
        <Drawer.Screen name="Home" component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name={'home'} size={26} color='#1a75bc' />
            )
          }} 
          />
      <Drawer.Screen name="Test" component={Test}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name={'home'} size={26} color='#1a75bc' />
            )
          }} 
          />
      </Drawer.Navigator>
    );
  }

  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }} >
          
          <Stack.Screen name="Drawer" component={this.myDrawer} />
          {/* <Stack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
