import React from 'react';
import {Image, StyleSheet, View, Text, Button} from 'react-native';
import {Colors} from '../../constants/styles';
import {StackActions} from '@react-navigation/native';
import { getDogImage } from '../utils/profile';

const Initial = ({navigation}) => {
  const getImageHandler = async () => {
    const res = await getDogImage();
  };

  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Home"></Button>
      <Button
        onPress={() => {
          navigation.navigate('Welcome');
        }}
        title="Welcome"></Button>
      <Button
        onPress={() => {
          navigation.navigate('RunningHome');
        }}
        title="Running"></Button>
      <Button
        onPress={() => {
          navigation.navigate('ProfileHome');
        }}
        title="Profile"></Button>
      <Button
        onPress={() => {
          navigation.navigate('GuideHome');
        }}
        title="Guide"></Button>
      <Button
        onPress={() => {
          navigation.navigate('Choice');
        }}
        title="프로필 선택"></Button>
      <Button
        onPress={() => {
          navigation.navigate('Myinfo');
        }}
        title="내 프로필"></Button>
    </View>
  );
};

export default Initial;
