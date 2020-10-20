import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate('Profile', {name: 'Test here'});
        }}
      />
    </View>
  );
}

function ProfileScreen({navigation, route}) {
  const {name} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{name}</Text>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({navigation, route}) {
  const {note, age} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{note}</Text>
      <Text>{age}</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'blue'},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        initialParams={{note: 'initial', age: 34}}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
