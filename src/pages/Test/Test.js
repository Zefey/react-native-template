import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import styles from './TestStyles'
import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft'

export default class Test extends PureComponent {
  static navigationOptions = props => {
    return {
      headerTitle: 'Test',
      headerLeft:<HeaderLeft onPress={() => {props.navigation.goBack()}}/>
    }
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{color: '#000'}}>Test</Text>
      </SafeAreaView>
    )
  }
}