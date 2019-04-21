import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'

import styles from "./LoginStyles";
import Button from '../../components/Button/Button';
import {login} from '../../actions/user'

class Login extends PureComponent {
  static navigationOptions = props => {
    return {
      headerTitle: "Login"
    }
  }

  state = {

  }

  componentDidMount(){
    console.log('Login',this.props,this.state);
    this.props.login();
  }

  componentWillReceiveProps(nextProps){
    console.log('nextProps',nextProps);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button onPress={()=>{this.props.navigation.navigate('MainTab')}}>跳转</Button>
      </SafeAreaView>
    )
  }
}

export default connect((state) => {
  let { userReducer,stackReducer } = state;
  return {
      userReducer,
      stackReducer
  }
},{login})(Login)