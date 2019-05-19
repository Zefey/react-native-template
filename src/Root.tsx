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
      screen: createStackNavigator({Home}),
      navigationOptions: () => {
        return {
          header:null,
          tabBarLabel: "首页",
        };
      }
    },
    Found: {
      screen: createStackNavigator({Found}),
      navigationOptions: () => {
        return {
          header:null,
          tabBarLabel: "发现"
        };
      }
    },
    Mine: {
      screen: createStackNavigator({Mine}),
      navigationOptions: () => {
        return {
          header:null,
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
    defaultNavigationOptions:({ navigation })=>({
      header: null,
      headerLayoutPreset: "center",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName : string = "";
        let iconColor : string = tintColor || "#000";
        if(routeName == 'Home'){
          iconName = "home";
        }else if(routeName == 'Found'){
          iconName = "search";
        }else if(routeName == 'Mine'){
          iconName = "user";
        }
        return <Iconfont size={20} name={iconName} color={iconColor}/>
      }
    })
    
  }
);

MainTab.navigationOptions = {
  header:null
}

const AuthRouter = createStackNavigator(
  {
    Login
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);


const AppRouter = createStackNavigator(
  {
    MainTab,
    Login,
    Test
  },
  {
    initialRouteName: "MainTab",
    headerMode: "screen",
    defaultNavigationOptions: {
      header: null
    },
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

const mapStateToProps = (state:any) => (
  {
    stackReducer: state.stackReducer
  }
)


export default connect(mapStateToProps)(App);
  