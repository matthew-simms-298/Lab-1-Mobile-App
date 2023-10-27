/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
  
  let condition = false;

  let dynamicStyles = condition ? styles.text : styles.textBlue;

  return (
    <View style={styles.container}>
      <Text style={dynamicStyles}> Hello World! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
    color: 'red'
  },
  text: {
    color: 'red',
    fontSize: 30
  },
  textBlue: {
    color: 'blue',
    fontSize: 30
  }
})

export default App;
