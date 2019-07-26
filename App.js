import React, { Component } from "react"
import AppNavigator from './src/config/route'
import ProviderStore from './src/store/ProviderStore'
import { Provider } from 'mobx-react/native'

export default class App extends Component {
  render() {
    return (
      <Provider {...ProviderStore}>
        <AppNavigator />
      </Provider>
    )
  }
}
