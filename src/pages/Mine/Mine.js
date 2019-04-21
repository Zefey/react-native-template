import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import styles from "./MineStyles";


export default class Mine extends PureComponent {
  static navigationOptions = props => {
    return {
      headerTitle: "Mine"
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