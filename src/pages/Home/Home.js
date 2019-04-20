import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import HeaderLeft from "../../components/HeaderLeft/HeaderLeft";
import styles from "./HomeStyles";
import rpx from '../../utils/rpx';


export default class Home extends PureComponent {
  static navigationOptions = props => {
    return {
      headerTitle: "Home",
      headerLeft: <HeaderLeft onPress={()=>{props.navigation.goBack()}}/>
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