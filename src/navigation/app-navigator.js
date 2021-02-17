import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginForm from '../components/LoginForm'
import EmployeeListScreen from '../components/EmployeeList'
import EmployeeCreateScreen from '../components/EmployeeCreate'

const Stack = createStackNavigator();

const RootNavigator = ()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginForm}/>
      <Stack.Screen name="EmployeeListScreen" component={EmployeeListScreen}/>
      <Stack.Screen name="EmployeeCreateScreen" component={EmployeeCreateScreen }/>
    </Stack.Navigator>
  )
}

export default RootNavigator;