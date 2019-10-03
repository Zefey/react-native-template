import React,{PureComponent} from "react";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
    NavigationScreenProps
} from "react-navigation";
import Iconfont from './components/Iconfont/Iconfont'
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';

//page
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Found from "./pages/Found/Found";
import Mine from "./pages/Mine/Mine";
import Test from "./pages/Test/Test";

const TransitionConfiguration = () => ({
  screenInterpolator: (sceneProps:any) => {
      const {scene} = sceneProps;
      const {route} = scene;
      // 获取屏幕切换时新屏幕的参数
      const params = route.params || {};
      // 看看参数中是否有 transition 参数，有则使用，否则使用缺省值 forHorizontal
      // forHorizontal 表示从右向左滑出
      const transition = params.transition || 'forHorizontal';
      let InterpolatorType:any = StackViewStyleInterpolator;
      return InterpolatorType[transition](sceneProps);
  },
});

const NavigationOptionsConfig:any = {
  headerLayoutPreset: "center",
  headerMode: 'float',
  transitionConfig: TransitionConfiguration,
  defaultNavigationOptions: {
    headerBackTitle: null,
    gesturesEnabled:true,
    headerTintColor: "#000",
    headerStyle: {
      backgroundColor:"#fff"
    }
  }
}
  
const MainTab = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({Home},NavigationOptionsConfig),
      navigationOptions: () => {
        return {
          tabBarLabel: "首页",
        };
      }
    },
    Found: {
      screen: createStackNavigator({Found},NavigationOptionsConfig),
      navigationOptions: () => {
        return {
          tabBarLabel: "发现"
        };
      }
    },
    Mine: {
      screen: createStackNavigator({Mine},NavigationOptionsConfig),
      navigationOptions: () => {
        return {
          tabBarLabel: "我的"
        };
      }
    }
  },
  {
    initialRouteName:'Home',
    lazy: true,
    backBehavior:'none',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "#2860a7",
      inactiveTintColor: "#66717c"
    },
    defaultNavigationOptions:({ navigation }:any)=>({
      tabBarIcon: ({ focused, horizontal, tintColor }:any) => {
        const { routeName } = navigation.state;
        let iconName : string = "";
        if(routeName == 'Home'){
          iconName = "home";
        }else if(routeName == 'Found'){
          iconName = "search";
        }else if(routeName == 'Mine'){
          iconName = "user";
        }
        return <Iconfont size={24} name={iconName} color={tintColor}/>
      }
    })
    
  }
);

MainTab.navigationOptions = {
  header:null
}

const AuthRouter = createStackNavigator(
  {
    Login,
    Register
  },
  NavigationOptionsConfig
);


export const AppRouter = createStackNavigator(
  {
    MainTab,
    Login,
    Register,
    Test
  },
  NavigationOptionsConfig
);

export const MyRouter = createAppContainer(
  createSwitchNavigator(
    {
      AuthRouter,
      AppRouter
    },
    {
      initialRouteName: "AuthRouter"
    },
  )
);


export default class App extends PureComponent {
  render() {
    return <MyRouter screenProps={this.props}/>
  }
}