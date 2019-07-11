import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const SimpleApp = createStackNavigator({
  Home: { screen: HomeScreen }
});

const AppNavigator = createAppContainer(SimpleApp);

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
