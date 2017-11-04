import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyles, buttonText } = styles;


  return (
    <TouchableOpacity onPress={ onPress } style={buttonStyles}>
      <Text style={buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyles: {
    flex: 1,
    alignSelf: 'stretch', //similar to aignItems but only effects a single elements,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#007aff',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default Button;
