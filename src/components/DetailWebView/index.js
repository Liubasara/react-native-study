import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

import CommonHeader from '../CommonHeader'
import htmlTemplate from './htmlTemplate'

export default class DetailWebView extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    noTemplate: PropTypes.bool,
    content: PropTypes.string
  }
  
  static defaultProps = {
    noTemplate: false
  }

  UNSAFE_UNSAFE_componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    const { content, noTemplate } = this.props
    return (
      <CommonHeader title="文章详情">
        <WebView
          originWhitelist={['*']}
          source={{ html: noTemplate ? content : htmlTemplate(content) }}
          ref={'webview'}
          scalesPageToFit
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          mixedContentMode="always"
          onLoad={() => {
            this.refs.webview.postMessage('postTest')
          }}
        />
      </CommonHeader>
    )
  }
}

const styles = StyleSheet.create({

})
