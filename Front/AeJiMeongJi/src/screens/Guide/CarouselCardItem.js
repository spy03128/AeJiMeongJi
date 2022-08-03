import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Colors} from '../../constants/styles';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.imgUrl}} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.back200,
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: '#222',
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 10,
  },
});

export default CarouselCardItem;
