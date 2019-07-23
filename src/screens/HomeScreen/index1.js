import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';

class HomeScreen extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 36 }}>Hello, Navigation!</Text>
        <Button
        title="goTab2"
        onPress={Actions.HomeScreen2ForRoute}></Button>
      </View>
    )
  }
}

export default HomeScreen
