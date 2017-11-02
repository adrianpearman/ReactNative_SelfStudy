// import a library to run in the application
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => {
  return (
    <View>
      <Header headerText={'Albums!!'} />
      <AlbumList />
    </View>
  );
};

// rendering it to the device
AppRegistry.registerComponent('albums', () => App);
