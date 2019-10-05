import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { SafeAreaView,NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux'

import styles from "./LoginStyles";
import Button from '../../components/Button/Button';
import {login,UserState} from '../../actions/user'

interface Props {
  login:any
}
interface State {
  loading: boolean;
}

class Login extends PureComponent<Props & NavigationScreenProps,State> {
  static navigationOptions = () => {
    return {
      headerTitle:'Login' 
    }
  }

  state:State = {
    loading:false
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonView}>
          <Button 
            style={styles.button}
            isLoading={this.state.loading}
            onPress={()=>{
              let data = {};
              this.props.login(data,(res:any)=>{
                if(res.token){
                  this.setState({loading:false});
                  this.props.navigation.navigate('MainTab');
                }
              });
              this.setState({loading:true});
            }}>模拟登录</Button>
            <Button 
              style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('Register');
              }}>注册</Button>
        </View>
      </SafeAreaView>
    )
  }
}

export default connect((state:any) => {
  let { userReducer,nav } = state;
  return {
      userReducer,
      nav
  }
},{login})(Login)