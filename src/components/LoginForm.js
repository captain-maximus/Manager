import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Input} from './common';
import Ripple from 'react-native-material-ripple';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onButtonPress() {
    console.log('Button Pressed');
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <StatusBar backgroundColor="#23272a" />
          <Text
            style={{
              fontFamily: 'Helvetica',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'red',
            }}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: '#23272a',
          flex: 1,
        }}>
        <StatusBar backgroundColor="transparent" />
        <Text
          style={{
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            fontSize: 24,
            margin: 16,
            color: 'white',
          }}>
          Manager
        </Text>
        <Input
          label="Username"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        <Input
          label="Password"
          placeholder="password"
          secureTextEntry
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        {this.renderError()}
        <Ripple
          onPress={this.onButtonPress.bind(this)}
          style={{
            marginHorizontal: 16,
            height: 48,
            borderWidth: 0.5,
            marginVertical: 16,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7289da',
          }}
          rippleDuration={800}>
          <Text
            style={{
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
              fontSize: 18,
              color: 'white',
            }}>
            Login
          </Text>
        </Ripple>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
