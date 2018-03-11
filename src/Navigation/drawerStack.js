import { StackNavigator, DrawerNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

import Page1 from '../components/Page1/page1.js';
import Page2 from '../components/Page2/page2.js';
import MainScreen from '../screens/MainScreen';

const routeConfigs = {
  Home: { screen: MainScreen },
  screen1: { screen: Page1 },
  screen2: { screen: Page2 }
};

const drawerNavigatorConfig = {
  drawerWidth: '300',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#61DAFB',
      paddingLeft: 10,
      paddingRight: 10
    },
    title: 'Seniors',
    headerTintColor: 'white',
    headerLeft: (
      <View>
        <TouchableHighlight
          onPress={() => {
            navigation.state.index === 0
              ? navigation.navigate('DrawerOpen')
              : navigation.navigate('DrawerClose');
          }}
        >
          <Text>Menu</Text>
        </TouchableHighlight>
      </View>
    )
  })
};

const DrawerStack = DrawerNavigator(routeConfigs);

export const DrawerNavigation = StackNavigator(
  {
    drawerStack: { screen: DrawerStack }
  },
  drawerNavigatorConfig
);
