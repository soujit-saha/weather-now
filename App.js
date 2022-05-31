import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Screens/Header';
import Home from './Screens/Home';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
