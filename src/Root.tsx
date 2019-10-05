import React,{PureComponent} from "react";
import {BackHandler,ToastAndroid} from "react-native";
import { connect } from "react-redux";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
    NavigationScreenProps,
    NavigationActions
} from "react-navigation";
import {
  createReduxContainer
} from 'react-navigation-redux-helpers' 
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

const TabData:any = {
    Home:{label:'首页',icon:'home'},
    Found:{label:'发现',icon:'search'},
    Mine:{label:'我的',icon:'user'}
}
  
const MainTab = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({Home},NavigationOptionsConfig)
    },
    Found: {
      screen: createStackNavigator({Found},NavigationOptionsConfig)
    },
    Mine: {
      screen: createStackNavigator({Mine},NavigationOptionsConfig)
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
    defaultNavigationOptions:({ navigation }:NavigationScreenProps)=>{
        const { routeName } = navigation.state;
        let {label,icon} = TabData[routeName];
        return {
          tabBarLabel:label,
          tabBarIcon: ({ focused, tintColor }:any) => {
            return <Iconfont size={24} name={icon} color={tintColor}/>
          }
      }
    }
    
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


const AppRouter = createStackNavigator(
  {
    MainTab,
    Test
  },
  NavigationOptionsConfig
);

export const MyRouter = createSwitchNavigator(
    {
      AuthRouter,
      AppRouter
    },
    {
      initialRouteName: "AuthRouter"
    },
  )

const ReduxRouter = createReduxContainer(MyRouter);

interface Props {
  nav:any
  dispatch:any
}

class App extends PureComponent<Props> {

  lastBackPressed:any;

  componentDidMount() {
      BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
      this.lastBackPressed = null;
  }
  onBackPress = () => {
      const { dispatch, nav } = this.props;
      if (nav.index === 0) {
          if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
              return false;
          }
          this.lastBackPressed = Date.now();
          ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      }
      dispatch(NavigationActions.back());
      return true;
  };
  render() {
      const { dispatch, nav } = this.props;
      return (
          <ReduxRouter state={nav} dispatch={dispatch}/>
      );
  }
}

const mapStateToProps = (state:any) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(App);