import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import HeaderLeft from "../../components/HeaderLeft/HeaderLeft";
import styles from "./FoundStyles";
import rpx from '../../utils/rpx';


export default class Found extends PureComponent {
  static navigationOptions = props => {
    return {
      headerTitle: "Found",
      headerLeft: <HeaderLeft onPress={()=>{props.navigation.goBack()}}/>
    }
  }

  state = {

  }

  componentDidMount(){
    console.log('Found',this.props,this.state);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Found</Text>
      </SafeAreaView>
    )
  }
}