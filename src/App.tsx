import React, { PureComponent } from "react";
import { Provider } from 'react-redux'

import Root from "./Root";
import configureStore from "./store/configureStore";

const store = configureStore({});

export default class App extends PureComponent {

  render() {
      return (
        <Provider store={store}>
          <Root {...this.props}/>
        </Provider>
      )
  }
  
}