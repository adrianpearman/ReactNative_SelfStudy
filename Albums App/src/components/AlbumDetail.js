import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle, headerContent, thumbnailContainer, headerText, imageStyle } = styles;

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainer}>
            <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={headerContent}>
            <Text style={headerText}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
    );
};

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 15
  },
  headerText: {
    fontSize: 16
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainer: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
