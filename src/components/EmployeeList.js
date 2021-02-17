import React from 'react';
import {View, Text, StatusBar, SafeAreaView, Dimensions} from 'react-native';
import Ripple from 'react-native-material-ripple';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native'

const EmployeeList = () => {

  const navigation = useNavigation();

  return(
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#23272a',
    }}
    >
      <StatusBar translucent backgroundColor="transparent" animated />
      <Text
      style={{
        fontFamily: 'Helvetica',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
        marginTop: 40,
        color: 'white'
      }}
      >Employees</Text>
      <Ripple
      onPress={()=> navigation.navigate('EmployeeCreateScreen')}
      style={{
        width:52,
        height:52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7289da',
        borderRadius: 26,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        left: Dimensions.get("window").width-68,
        marginBottom: 32
      }}
      rippleDuration={600}>
      <FontAwesome5
        name="plus"
        size={24}
        color='white'
        />
      </Ripple>
    </SafeAreaView>
  )
}

export default EmployeeList