import React, {useLayoutEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PlaceNavbar from '../../components/nav/PlaceNavbar';
import ConnectMyInfo from '../../components/Profile/ConnectMyInfo';
import LikeGuide from '../../components/Profile/LikeGuide';
import NoGuide from '../../components/Profile/NoGuide';
import {Colors} from '../../constants/styles';
import {fetchLikedGuide} from '../../utils/profile';

const MyPage = () => {
  const [guide, setGuide] = useState();

  useLayoutEffect(() => {
    const fetchInitialData = async () => {
      const res = await fetchLikedGuide();
      console.log(res);
    };
    // fetchInitialData()
  }, []);

  return (
    <View style={styles.rootContainer}>
      <PlaceNavbar>MyPage</PlaceNavbar>
      <View style={styles.ConnectMyInfo}>
        <ConnectMyInfo />
      </View>
      <View style={styles.noGuideContainer}>{!guide && <NoGuide />}</View>
      <View>{guide && <FlatList data={guide} renderItem={LikeGuide} />}</View>
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
    alignItems: 'center',
  },
  noGuideContainer: {
    alignItems:'center'
  }
});
