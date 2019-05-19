import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView,NavigationScreenProps } from 'react-navigation'

import styles from './TestStyles'
import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft'
import { connect } from 'react-redux';

interface Props {}
interface State {}

class Test extends PureComponent<Props & NavigationScreenProps,State> {
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

  componentDidMount(){
    console.log(this.props);
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{color: '#000'}}>Test</Text>
      </SafeAreaView>
    )
  }
}

export default connect((state:any) => {
  let { userReducer,stackReducer } = state;
  return {
      userReducer,
      stackReducer
  }
})(Test)