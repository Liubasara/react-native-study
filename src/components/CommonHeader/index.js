import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Dimensions, Platform, StatusBar, Text, TouchableOpacity, Image } from 'react-native'
import Constant from '../../utils/Constant'
import { Actions } from 'react-native-router-flux'
import BackIcon from '../../assets/images/left_arr.png'

const { width, height } = Dimensions.get('window')

const hitSlopNumber = 20

export default class CommonHeader extends Component {
  constructor (props) {
    super(props)
  }
  static propTypes = {
    title: PropTypes.string,
    defaultStatusBar: PropTypes.bool,
    titleView: PropTypes.any,
    backIconSrc: PropTypes.number
  }
  static defaultProps = {
    title: '标题',
    defaultStatusBar: false
  }
  renderStatBar () {
    if (Platform.OS === 'ios') {
      return <StatusBar barStyle={this.props.defaultStatusBar ? 'default' : 'light-content'}></StatusBar>
    }
    return null
  }
  renderLeftIcon () {
    return (
      <TouchableOpacity
        onPress={() => {Actions.pop()}}
        style={styles.backView}
        hitSlop={{ top: hitSlopNumber, left: hitSlopNumber, bottom: hitSlopNumber, right: hitSlopNumber }}>
          <Image
            resizeMode="contain"
            style={{
              width: this.props.backIconSrc ? Constant.scale(16) : Constant.scale(9),
              height: this.props.backIconSrc ? Constant.scale(16) : Constant.scale(15)
            }}
            source={this.props.backIconSrc ? this.props.backIconSrc : BackIcon}/>

      </TouchableOpacity>
    )
  }
  renderTitle () {
    return (
      <View style={styles.titleView}>
        {
          this.props.titleView
          ||
          <Text numberOfLines={1} style={styles.title}>{this.props.title}</Text>
        }
      </View>
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          {this.renderStatBar()}
          <View style={styles.header}>
            {this.renderLeftIcon()}
            {this.renderTitle()}
          </View>
        </View>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1F6',
    width: width,
    height: height,
    paddingBottom: Constant.paddingIPXBottom
  },
  headerView: {
    backgroundColor: "#282B3B",
    height: Constant.scale(50),
    width: '100%',
    justifyContent: 'center',
    paddingLeft: Constant.normalMargin,
    paddingRight: Constant.normalMargin
  },
  header: {
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Constant.sizeHeaderMarginTop,
    flexDirection: 'row',
    height: Constant.sizeHeaderContent,
    alignItems: 'center'
  },
  backView: {
    justifyContent: 'center',
    width: Constant.scale(50),
    flex: 1
  },
  titleView: {
    left: 0,
    top: 0,
    height: Constant.sizeHeaderContent,
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: Constant.scale(17),
    width: '100%',
    textAlign: 'center',
    color: 'white',
  }
})
