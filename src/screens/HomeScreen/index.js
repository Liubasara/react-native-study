import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.navigation = props.navigation
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 36 }}>Hello, Navigation!</Text>
        <Button
        title="goTab2"
        onPress={() => {this.navigation.navigate("Tab2")}}></Button>
      </View>
    )
  }
}

const HomeScreenStackNavigator = createStackNavigator({ HomeScreen }, {
  navigationOptions: {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../assets/images/tab_home_active.png')
        : require('../../assets/images/tab_home.png')
      return <Image source={icon} style={{ height: 22, width: 22 }} />
    }
  },
  defaultNavigationOptions: {
    title: '首页'
  }
})

export default HomeScreenStackNavigator
