import React, { PureComponent } from 'react';
import { View, Text, Platform, Alert } from 'react-native';
import { SafeAreaView,NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux'

import styles from "./HomeStyles";
import Header from '../../components/Header/Header';
import HeaderRight from '../../components/HeaderRight/HeaderRight';
import Button from '../../components/Button/Button';
import Iconfont from "../../components/Iconfont/Iconfont";
import rpx from '../../utils/rpx';
import {UserState} from '../../actions/user'

interface Props {
  userReducer:UserState
}
interface State {}

class Home extends PureComponent<Props & NavigationScreenProps,State> {
  
  static navigationOptions = (props:any) => {
    return {
      header:<Header 
              headerTitle="Home"
              headerRight={
              <HeaderRight onPress={()=>{Alert.alert(Platform.OS.toUpperCase())}}>
                <Iconfont name={Platform.OS == 'android' ? 'android' : 'apple'} size={rpx(40)} />
              </HeaderRight>}/>
    }
  }

  state:State = {
  }


  render() {
    let {username,token} = this.props.userReducer;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          username:{username}
        </Text>
        <Text style={styles.text}>
          token:{token}
        </Text>
        <Button onPress={()=>{this.props.navigation.navigate('Test')}}>跳转到Test</Button>
      </SafeAreaView>
    )
  }
}

export default connect((state:any) => {
  let { userReducer,stackReducer } = state;
  return {
      userReducer,
      stackReducer
  }
})(Home)