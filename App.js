import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import MyTabs from './MyTabs';
import Things from './Things';

const App = () => {
  return (
    <NavigationContainer>
      {/* {/* <StatusBar barStyle="dark-content" /> */}

      <MyTabs />
      {/* <Things /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'green',
    borderWidth: 10,
  },
});

export default App;
