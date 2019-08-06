import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

import CommonHeader from '../CommonHeader'

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
      <CommonHeader title="文章详情">
        <WebView 
          source={{ html: content }}
        />
      </CommonHeader>
    )
  }
}

const styles = StyleSheet.create({

})
