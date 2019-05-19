import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView,NavigationScreenProps } from 'react-navigation'

import styles from './TestStyles'
import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft'

interface Props {}
interface State {}

export default class Test extends PureComponent<Props & NavigationScreenProps,State> {
  static navigationOptions = (props:any) => {
    return {
      header:<Header 
                headerTitle='Test' 
                headerLeft={<HeaderLeft onPress={() => {props.navigation.goBack()}}/>}
              />
    }
  }

  state:State={

  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{color: '#000'}}>Test</Text>
      </SafeAreaView>
    )
  }
}