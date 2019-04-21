import React, { PureComponent } from 'react';
import { View, Text,Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'

import styles from "./HomeStyles";
import HeaderRight from '../../components/HeaderRight/HeaderRight';
import Iconfont from "../../components/Iconfont/Iconfont";
import rpx from '../../utils/rpx';

class Home extends PureComponent {
  
  static navigationOptions = props => {
    return {
      headerTitle: "Home",
      headerRight:(<HeaderRight>
                    <Iconfont name={Platform.OS == 'android' ? 'android' : 'apple'} size={rpx(34)} />
                  </HeaderRight>)
    }
  }

  state = {

  }

  componentDidMount(){
    console.log('Home',this.props,this.state);
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Home</Text>
      </SafeAreaView>
    )
  }
}

export default connect((state) => {
  let { userReducer,stackReducer } = state;
  return {
      userReducer,
      stackReducer
  }
})(Home)