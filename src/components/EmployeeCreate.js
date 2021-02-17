import React from 'react';
import {View, Text, StatusBar, SafeAreaView, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Input, Spinner} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions'

const EmployeeCreate = () =>{
  return (
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#23272a',
    }}
    >
      <StatusBar translucent backgroundColor="transparent" animated />
      <View
      style={{
        height:48,
        marginTop: 32,
        justifyContent: 'center'
      }}
      >
        <Ionicons
        style={{
          marginLeft: 16
        }}
        name="arrow-back"
        size={24}
        color="white"
        />
      </View>
      <Text
      style={{
        fontFamily: 'Helvetica',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 16,
      }}
      >Create Employee</Text>
      <Input label="Name" placeholder="Enter your name" value={this.props.name} onChangeText={text => this.props.employeeUpdate({props: 'name', value: text})}/>
      <Input label="Phone" placeholder="Enter your phone number" value={this.props.phone} onChangeText={text => this.props.employeeUpdate({props: 'phone', value: text})}/>
      <Spinner/>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  const { name, phone, shift} = state.employeeForm;

  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)