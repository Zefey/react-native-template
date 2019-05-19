import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView,NavigationScreenProps } from 'react-navigation';

import styles from "./FoundStyles";
import Header from '../../components/Header/Header';

interface Props {}
interface State {}

export default class Found extends PureComponent<Props & NavigationScreenProps,State> {
  static navigationOptions = () => {
    return {
      header: (
        <Header headerTitle='Found'/>
      )
    }
  }

  state:State = {

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Found</Text>
      </SafeAreaView>
    )
  }
}