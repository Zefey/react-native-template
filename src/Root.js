import React,{PureComponent} from "react";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";
import Iconfont from './components/Iconfont/Iconfont'
import { connect } from 'react-redux'

//page
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Found from "./pages/Found/Found";
import Mine from "./pages/Mine/Mine";
  
  
const MainTabView = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({
          Home: Home
      }),
      navigationOptions: props => {
        return {
          tabBarIcon: ({ tintColor, focused }) => (
            <Iconfont size={20} name="home" color={tintColor} />
          ),
          tabBarLabel: "首页"
        };
      }
    },
    Found: {
      screen: createStackNavigator({
          Found: Found
      }),
      navigationOptions: props => {
        return {
          tabBarIcon: ({ tintColor, focused }) => (
            <Iconfont size={20} name="search" color={tintColor} />
          ),
          tabBarLabel: "发现"
        };
      }
    },
    Mine: {
      screen: createStackNavigator({
          Mine: Mine
      }),
      navigationOptions: props => {
        return {
          header: null,
          tabBarIcon: ({ tintColor, focused }) => (
            <Iconfont size={20} name="user" color={tintColor}/>
          ),
          tabBarLabel: "我的"
        };
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#2860a7",
      inactiveTintColor: "#66717c"
    },

    navigationOptions: {
      header: null,
      headerLayoutPreset: "center"
    }
  }
);

const Main = createStackNavigator(
  {
    Main: MainTabView
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: null,
      headerLayoutPreset: "center"
    },
    // initialRouteName: ""
  }
);

const InitPages = createStackNavigator(
  {
    Login
  },
  {
    headerLayoutPreset: "center"
  }
);

export const Router = createAppContainer(
  createSwitchNavigator(
    {
      InitPages,
      Main
    },
    {
      backBehavior: "none",
      // initialRouteName: "Main"
    },
  )
);


class App extends PureComponent {
  render() {
    return <Router />
  }
}

const mapStateToProps = state => (
  {
    stackReducer: state.stackReducer
  }
)


export default connect(mapStateToProps)(App);
  