import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 16,
    marginRight: 8,
    borderRightWidth: 0.5,
    color: '#99aab5',
  },
  containerStyle: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    marginHorizontal: 16,
    borderRadius: 8,
    marginVertical: 16,
    backgroundColor: '#2c2f33'
  }
};

export { Input };
