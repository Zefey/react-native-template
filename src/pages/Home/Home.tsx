import React, { PureComponent } from 'react';
import { View, Text,Platform } from 'react-native';
import { SafeAreaView,NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux'

import styles from "./HomeStyles";
import Header from '../../components/Header/Header';
import HeaderRight from '../../components/HeaderRight/HeaderRight';
import Button from '../../components/Button/Button';
import Iconfont from "../../components/Iconfont/Iconfont";
import rpx from '../../utils/rpx';

interface Props {}
interface State {}

class Home extends PureComponent<Props & NavigationScreenProps,State> {
  
  static navigationOptions = (props:any) => {
    return {
      header:<Header 
              headerTitle="Home"
              headerRight={
              <HeaderRight>
                <Iconfont name={Platform.OS == 'android' ? 'android' : 'apple'} size={rpx(34)} />
              </HeaderRight>}/>
    }
  }

  state:State = {

  }

  componentDidMount(){
    console.log('Home',this.props,this.state);
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
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