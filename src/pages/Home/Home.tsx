import React, { PureComponent } from 'react';
import { View, Text, Platform, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView,NavigationScreenProps } from 'react-navigation';
import withReducerState from '../../store/withReducerState'

import styles from "./HomeStyles";
import Button from '../../components/Button/Button';
import Iconfont from "../../components/Iconfont/Iconfont";
import {UserState} from '../../actions/user'

interface Props {
  userReducer:UserState
}
interface State {}

class Home extends PureComponent<Props & NavigationScreenProps,State> {
  static navigationOptions = () => {
    return {
      headerTitle:'Home',
      headerRight:
        <TouchableOpacity style={styles.headerItem} onPress={()=>{Alert.alert(Platform.OS.toUpperCase())}}>
          <Iconfont name={Platform.OS == 'android' ? 'android' : 'apple'} size={26} />
        </TouchableOpacity>
    }
  }

  state:State = {
  }


  render() {
    let {username,token} = this.props.userReducer;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          username:{username}
        </Text>
        <Text style={styles.text}>
          token:{token}
        </Text>
        <Button onPress={()=>{this.props.navigation.navigate('Test')}}>跳转到Test</Button>
      </SafeAreaView>
    )
  }
}

export default withReducerState(Home)