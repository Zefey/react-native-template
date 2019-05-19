import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView,NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux'

import styles from "./LoginStyles";
import Button from '../../components/Button/Button';
import {login} from '../../actions/user'
import Header from '../../components/Header/Header';

interface Props {
  login:any
}
interface State {}

class Login extends PureComponent<Props & NavigationScreenProps,State> {
  static navigationOptions = () => {
    return {
      header:<Header headerTitle="Login"/>
    }
  }

  state:State = {

  }

  componentDidMount(){
    console.log('Login',this.props,this.state);
    this.props.login();
  }

  componentWillReceiveProps(nextProps:any){
    console.log('nextProps',nextProps);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button onPress={()=>{this.props.navigation.navigate('MainTab')}}>跳转到MainTab</Button>
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
},{login})(Login)