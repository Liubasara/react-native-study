import { observable, action, runInAction, useStrict, toJS } from 'mobx'

class SystemStore {
  @observable tabState = 0

  @action
  switchTab (index = 0) {
    this.tabState = index
  }
  
}

export default new SystemStore()