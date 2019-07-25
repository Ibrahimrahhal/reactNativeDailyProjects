import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import React from 'react';

// export default AppNavigatorLevelOneComp;
let app = createStackNavigator({
    Home:{
        screen:Login,
        navigationOptions: ({ navigation }) => ({
            header :null
                  })
    }
}, {
    initialRouteName: "Home"
  });
export default app;