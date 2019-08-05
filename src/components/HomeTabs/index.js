import React, { Component } from 'react'
import { StyleSheet, Dimensions, TouchableOpacity, View, Text, Image } from 'react-native'
import { inject, observer } from 'mobx-react/native'
import Constant from '../../utils/Constant'
const { width, height } = Dimensions.get("window")

@inject(stores => ({
  system: stores.system
}))
@observer
export default class HomeTabs extends Component {
  constructor (props) {
    super(props)
  }
  
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  renderFoot () {
    const { tabState } = this.props.system
    return (
      <View style={styles.footContainer}>
        {
          this.props.tabViews.map(({title, tabIcon}, index) => {
            const isSelect = index + '' === '' + tabState
            const image = isSelect ? tabIcon.isSelect : tabIcon.unSelect
            return (
              <TouchableOpacity
                key={index}
                onPress={() => this.props.system.switchTab(index)}
                disabled={isSelect}
                style={styles.tabTouch}
              >
                <Image
                  source={image}
                  style={[styles.tabTouch, styles.iconImg]}
                />
                <Text
                  style={isSelect ? styles.tabTextSel : styles.tabText}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  renderTab () {
    const { tabState } = this.props.system
    const TabComponent = this.props.tabViews[tabState]['component']
    return (
      <TabComponent></TabComponent>
    )
  }

  render () {
    return (
      <View
        style={styles.container}
      >
        <View style={{ flex: 1 }}>
          {this.renderTab()}
        </View>
        {this.renderFoot()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: width,
    height: height,
    paddingBottom: Constant.paddingIPXBottom
  },
  footContainer: {
    flexDirection: 'row',
    width: "100%",
    height: Constant.scale(50),
    alignItems: 'center'
  },
  tabTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  tabText: {
    marginTop: Constant.scale(5),
    fontSize: Constant.smallSize,
    color: Constant.lightText
  },
  tabTextSel: {
    marginTop: Constant.scale(5),
    fontSize: Constant.smallSize,
    color: Constant.themeText
  },
  iconImg: {
    height: Constant.scale(18),
    width: Constant.scale(25)
  }
})
