import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const LikeGuide = () => {
  return (
    <>
      <View>
        <Text></Text>
        <View styles={styles.guide}></View>
      </View>
    </>
  );
};

export default LikeGuide;

const styles = StyleSheet.create({
  guide: {
    height: responsiveHeight(3),
    width: responsiveWidth(90),
    marginTop: responsiveHeight(2),
  },
});
