import * as React from 'react';
import {Text, View} from 'react-native';
import Things from './Things';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Things />
    </View>
  );
}

export default HomeScreen;
