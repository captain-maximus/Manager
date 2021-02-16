import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Input } from './common'
import Ripple from 'react-native-material-ripple';

class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text
        style={{
          fontFamily: 'Helvetica',
          fontWeight: 'bold',
          fontSize: 24,
          margin: 16
        }}
        >Manager</Text>
        <Input label="Username"/>
        <Input label="Password"/>
        <Ripple
        style={{
          marginHorizontal: 16,
          height: 48,
          borderWidth: 0.5,
          marginVertical: 16,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        rippleDuration={800}
        >
          <Text
          style={{
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            fontSize: 18
          }}
          >Login</Text>
        </Ripple>
      </View>
    )
  }
}

export default LoginForm;