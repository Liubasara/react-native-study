import { View, Text, Button, Image } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import HomeScreen2 from '../screens/HomeScreen2'

// const TabNavigator = createBottomTabNavigator(
//   {
//     Tab1: HomeScreen,
//     Tab2: HomeScreen2,
//   },
//   {
//     tabBarPosition: 'bottom'
//   }
// )

// const SimpleApp = createStackNavigator({
//   Home: { screen: TabNavigator },
// }, {
//   defaultNavigationOptions: {
//     title: 'Hello !'
//   }
// })

// export default (AppNavigator = createAppContainer(TabNavigator))

/**
 * 引入导航组件，Router是最父组件包裹所有的组件
 */
import { Router, Scene } from 'react-native-router-flux'
import HomeScreenForRoute from '../screens/HomeScreen/index1'
import HomeScreen2ForRoute from '../screens/HomeScreen2/index2'

class TabIcon extends Component {
  render () {
    const icon = this.props.focused ? require('../assets/images/tab_home_active.png') : require('../assets/images/tab_home.png')
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Image source={icon} style={{ height: 22, width: 22, alignSelf: 'center' }} />
      </View>
    )
  }
}

const Root = () => (
  //标示Tabbar的Scene
  <Router sceneStyle={{ backgroundColor: 'white' }}>
    <Scene
      key="Tabbar"
      tabs // 默认为true
      hideNavBar={true}
      tabBarStyle={{height: 70}}
      default='HomeScreenForRoute'
    >
      <Scene // tabBar 组件
        key="HomeScreenForRoute"
        title={'首页'}
        icon={TabIcon}
        hideNavBar={false} // 隐藏导航栏
        component={HomeScreenForRoute}
      />
      <Scene // tabBar 组件
        key="HomeScreen2ForRoute"
        title={'我的'}
        icon={TabIcon}
        hideNavBar
        component={HomeScreen2ForRoute}
      />
    </Scene>
  </Router>
)

export default Root
