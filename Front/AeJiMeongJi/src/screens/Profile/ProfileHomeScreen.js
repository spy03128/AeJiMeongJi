import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileImage from '../../components/Profile/ProfileImage';
import ProfileInput from '../../components/Profile/ProfileInput';
import Button from '../../components/ui/Button';
import {Colors} from '../../constants/styles';

const ProfileHomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <ProfileImage />
      <ProfileInput
        textInputConfig={{
          placeholder: '반려견 이름',
          placeholderTextColor: '#6D6D6D',
        }}
        style={styles.profileInput}
      />
      <Button style={styles.button}>다음</Button>
    </View>
  );
};

export default ProfileHomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.back100,
  },
  profileInput: {
    marginTop: 80
  },
  button: {
    width: 230,
    height: 60,
    borderRadius: 30,
    marginTop: 50
  }
});
