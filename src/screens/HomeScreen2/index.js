import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class ScreenHome2 extends Component {
  constructor (props) {
    super(props)
    this.navigation = props.navigation
  }
  render () {
    return (
      <View>
        <Text style={{ fontSize: 36 }}>ScreenHome2</Text>
        <Button
        title="goTab1"
        onPress={() => {this.navigation.navigate("Tab1")}}></Button>
      </View>
    )
  }
}

const HomeScreenStackNavigator2 = createStackNavigator({ ScreenHome2 }, {
  navigationOptions: {
    tabBarLabel: 'Me',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../assets/images/tab_home_active.png')
        : require('../../assets/images/tab_home.png')
      return <Image source={icon} style={{ height: 22, width: 22 }} />
    }
  },
  defaultNavigationOptions: {
    title: '我的页面'
  }
})

export default HomeScreenStackNavigator2
