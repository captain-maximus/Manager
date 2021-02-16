import React, { Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'
class App extends Component {

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyA-_JmA7LPCNoJXeqm2YaWgmavRMv0iJ1Q",
      authDomain: "manager-a86f7.firebaseapp.com",
      projectId: "manager-a86f7",
      storageBucket: "manager-a86f7.appspot.com",
      messagingSenderId: "156628929417",
      appId: "1:156628929417:web:d5cc73bd1b298e29102f58",
      measurementId: "G-BLDYP19ZXW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    )
  }
}

export default App;