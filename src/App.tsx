import React, { PureComponent } from "react"
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import Root from "./Root";
import configureStore from "./store/configureStore";

const store = configureStore({});

// 移除console.*
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}

export default class App extends PureComponent {

  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
      return (
        <Provider store={store}>
          <Root {...this.props}/>
        </Provider>
      )
  }
  
}