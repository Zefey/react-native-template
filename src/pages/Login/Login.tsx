import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView,NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux'

import styles from "./LoginStyles";
import Button from '../../components/Button/Button';
import {login,UserState} from '../../actions/user'
import Header from '../../components/Header/Header';

interface Props {
  login:any
}
interface State {
  loading: boolean;
}

class Login extends PureComponent<Props & NavigationScreenProps,State> {
  static navigationOptions = () => {
    return {
      header:<Header headerTitle="Login"/>
    }
  }

  state:State = {
    loading:false
  }

  componentWillReceiveProps(nextProps:any){
    console.log('nextProps',nextProps);
    let userInfo:UserState = nextProps.userReducer;
    if(userInfo.token){
      this.setState({loading:false});
      this.props.navigation.navigate('MainTab');
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button 
          isLoading={this.state.loading}
          onPress={()=>{
            this.props.login();
            this.setState({loading:true});
          }}>模拟登录</Button>
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