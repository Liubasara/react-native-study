import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import HomeScreen2 from '../screens/HomeScreen2'

const TabNavigator = createBottomTabNavigator(
  {
    Tab1: HomeScreen,
    Tab2: HomeScreen2,
  },
  {
    tabBarPosition: 'bottom'
  }
)

// const SimpleApp = createStackNavigator({
//   Home: { screen: TabNavigator },
// }, {
//   defaultNavigationOptions: {
//     title: 'Hello !'
//   }
// })

export default (AppNavigator = createAppContainer(TabNavigator))
