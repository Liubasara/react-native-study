import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

class HomeScreen2 extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <View>
        <Text style={{ fontSize: 36 }}>ScreenHome2</Text>
        <Button
        title="goTab1"
        onPress={Actions.HomeScreenForRoute}></Button>
      </View>
    )
  }
}

export default HomeScreen2
