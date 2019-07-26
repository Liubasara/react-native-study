import React, { Component } from 'react'
import { StyleSheet, Dimensions, TouchableOpacity, View, Text, Image } from 'react-native'
import { inject, observer } from 'mobx-react/native'
import Constant from '../../utils/Constant'

import ICON_UN_0 from '../../assets/images/tab_home.png'
import ICON_UN_1 from '../../assets/images/tab_home.png'

import ICON_SEL_0 from '../../assets/images/tab_home_active.png'
import ICON_SEL_1 from '../../assets/images/tab_home_active.png'

const TAB_ICON_LIST = [
  {
    unSelect: ICON_UN_0,
    isSelect: ICON_SEL_0
  },
  {
    unSelect: ICON_UN_1,
    isSelect: ICON_SEL_1
  }
]

const { width, height } = Dimensions.get("window")
const TAB_TYPE_SELLER = ["首页", "我的"]

@inject(stores => ({
  system: stores.system
}))
@observer
export default class HomeTabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabState: 0
    }
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  renderFoot () {
    const { tabState } = this.props.system
    return (
      <View style={styles.footContainer}>
        {
          TAB_TYPE_SELLER.map((obj, index) => {
            const isSelect = index + '' === '' + tabState
            const image = isSelect ? TAB_ICON_LIST[index].isSelect : TAB_ICON_LIST[index].unSelect
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
                  {obj}
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
    switch (tabState) {
      case 0:
        return <View><Text>首页</Text></View>
      case 1:
        return <View><Text>我的</Text></View>
    }
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
