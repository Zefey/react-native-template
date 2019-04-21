import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import styles from "./FoundStyles";


export default class Found extends PureComponent {
  static navigationOptions = props => {
    return {
      headerTitle: "Found"
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