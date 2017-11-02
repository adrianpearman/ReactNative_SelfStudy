import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
      {/* this willrender all the information from the child elements */}
    </View>
  );
};

const styles = { //adding the styling to the card objects
  containerStyle: {
    borderWidth: 1,
    borderRadiius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

export default Card
