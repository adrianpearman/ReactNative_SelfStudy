// import a library to run in the application
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* the style of flex: 1 will allow for the whole slideanimation to continue instead of bouncing back to the top. */}
      <Header headerText={'Albums!!'} />
      <AlbumList />
    </View>
  );
};

// rendering it to the device
AppRegistry.registerComponent('albums', () => App);
