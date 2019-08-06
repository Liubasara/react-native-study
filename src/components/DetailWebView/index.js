import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default class DetailWebView extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    const { content } = this.props
    return (
      <WebView 
        source={{ html: content }}
      />
    )
  }
}

const styles = StyleSheet.create({

})
