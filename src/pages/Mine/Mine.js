import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import HeaderLeft from "../../components/HeaderLeft/HeaderLeft";
import styles from "./MineStyles";
import rpx from '../../utils/rpx';


export default class Mine extends PureComponent {
  static navigationOptions = props => {
    return {
      headerTitle: "Mine",
      headerLeft: <HeaderLeft onPress={()=>{props.navigation.goBack()}}/>
    }
  }

  state = {

  }

  componentDidMount(){
    console.log('Mine',this.props,this.state);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Mine</Text>
      </SafeAreaView>
    )
  }
}