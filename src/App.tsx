import React, { PureComponent } from "react"
import { StatusBar } from 'react-native'
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
//设置 StatusBar
// StatusBar.setBarStyle('dark-content');
// StatusBar.setBackgroundColor('transparent');
// StatusBar.setTranslucent(true);

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