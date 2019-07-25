import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView from 'react-native-maps';
import TopLevelNavigator from './components/AppNavigatorLevelOneComp';

export default function App() {
  let AppcontainerComp = createAppContainer(TopLevelNavigator);
  // console.log(AppcontainerComp)
  return (
<AppcontainerComp/>
  );
}

