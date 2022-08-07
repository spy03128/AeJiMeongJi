import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Colors} from '../../constants/styles';
import RunningDataItem from './RunningDataItem';
import data from './data';

const RunningData = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.InfoList}>
      <ScrollView>
        <View data={data} renderItem={RunningDataItem}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  InfoList: {
    backgroundColor: Colors.back200,
    width: 350,
    height: 550,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default RunningData;
