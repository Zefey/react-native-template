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
import Test from "./pages/Test/Test";
  
  
const MainTab = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({
        Home
      },
      {
        headerLayoutPreset: "center"
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
      screen: Found,
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
      screen: Mine,
      navigationOptions: props => {
        return {
          tabBarIcon: ({ tintColor, focused }) => (
            <Iconfont size={20} name="user" color={tintColor}/>
          ),
          tabBarLabel: "我的"
        };
      }
    }
  },
  {
    initialRouteName:'Home',
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

const AuthRouter = createStackNavigator(
  {
    Login
  },
  {
    headerLayoutPreset: "center"
  }
);


const AppRouter = createStackNavigator(
  {
    MainTab,
    Login,
    Test
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: null,
      headerLayoutPreset: "center"
    },
    initialRouteName: "MainTab"
  }
);

export const MyRouter = createAppContainer(
  createSwitchNavigator(
    {
      AuthRouter,
      AppRouter
    },
    {
      backBehavior: "none",
      initialRouteName: "AuthRouter"
    },
  )
);


class App extends PureComponent {
  render() {
    return <MyRouter />
  }
}

const mapStateToProps = state => (
  {
    stackReducer: state.stackReducer
  }
)


export default connect(mapStateToProps)(App);
  