import {Button} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';
const CustomNav = ({children, setIsEditing, isEditing}) => {
  const changeEditHandler = () => {
    setIsEditing(cur => !cur);
  };
  console.log(children);

  return (
    <View style={styles.navContainer}>
      <View style={styles.imageContainer}>
        {/* 화살표 */}
        <Image
          style={styles.image}
          source={require('../../Assets/image/arrow.png')}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.title}>{children}</Text>
      </View>
      <View>
        {isEditing ? (
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={changeEditHandler}>
            취소
          </Button>
        ) : (
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={changeEditHandler}>
            편집
          </Button>
        )}
      </View>
    </View>
  );
};

export default CustomNav;

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    top: 0,
    borderBottomWidth: responsiveHeight(0.3),
    borderColor: '#DD9944',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    paddingLeft: responsiveWidth(1),
  },
  image: {
    width: responsiveWidth(8),
    height: responsiveHeight(5),
  },
  title: {
    fontWeight:'bold',
    color: 'black',
    fontSize: responsiveFontSize(2)
  },
  button: {
    backgroundColor: Colors.back100,
  },
  buttonTitle: {
    color: '#D08C42',
    fontWeight: 'bold'
  },
});
