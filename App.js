/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import feed from './assets/data/feed';
import Router from './src/navigation/Router';

import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';

const post1 = feed[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default withAuthenticator(App);
