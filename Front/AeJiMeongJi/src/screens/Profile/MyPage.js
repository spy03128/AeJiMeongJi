import React from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceNavbar from '../../components/nav/PlaceNavbar';
import ConnectMyInfo from '../../components/Profile/ConnectMyInfo';
import LikeGuide from '../../components/Profile/LikeGuide';
import {Colors} from '../../constants/styles';

const MyPage = () => {
  return (
    <View style={styles.rootContainer}>
      <PlaceNavbar>MyPage</PlaceNavbar>
      <View style={styles.ConnectMyInfo}>
        <ConnectMyInfo />
      </View>
      <View>
        <LikeGuide />
      </View>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
  },
  ConnectMyInfo: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
