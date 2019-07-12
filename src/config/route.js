import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'

const SimpleApp = createStackNavigator({
  Home: { screen: HomeScreen }
})

export default (AppNavigator = createAppContainer(SimpleApp))
