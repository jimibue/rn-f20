import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import MyStacks from './MyStacks';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyStacks" component={MyStacks} />
    </Tab.Navigator>
  );
}

export default MyTabs;
