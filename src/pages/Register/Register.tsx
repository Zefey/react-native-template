import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView,NavigationScreenProps } from 'react-navigation'

import styles from './RegisterStyles'

interface Props {}
interface State {}

export default class Register extends PureComponent<Props & NavigationScreenProps,State> {
  static navigationOptions = () => {
    return {
      headerTitle:'Register' 
    }
  }

  state:State={
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{color: '#000'}}>Register</Text>
      </SafeAreaView>
    )
  }
}