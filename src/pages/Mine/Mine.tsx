import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView,NavigationScreenProps } from 'react-navigation';

import styles from "./MineStyles";
import Header from '../../components/Header/Header';

interface Props {}
interface State {}

export default class Mine extends PureComponent<Props & NavigationScreenProps,State> {
  static navigationOptions = () => {
    return {
      header:<Header headerTitle='Mine'/>
    }
  }

  state:State = {

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