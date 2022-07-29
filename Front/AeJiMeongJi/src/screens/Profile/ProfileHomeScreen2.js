import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ProfileInput from '../../components/Profile/ProfileInput';
import Button from '../../components/ui/Button';
import {Colors} from '../../constants/styles';
import {CheckBox, Icon} from '@rneui/themed';

const ProfileHomeScreen = () => {
  const [check1, setCheck1] = useState(false);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>추가 정보 입력</Text>
        <Text style={styles.subTitle}>
          원활한 서비스 이용을 위해 추가 정보를 입력해주세요.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <ProfileInput
          textInputConfig={{
            placeholder: '생년월일',
            placeholderTextColor: '#6D6D6D',
          }}
          style={styles.profileInput}
        />
        {/* 검색 가능 하게끔 */}
        <ProfileInput
          textInputConfig={{
            placeholder: '견종',
            placeholderTextColor: '#6D6D6D',
          }}
          style={styles.profileInput}
        />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            center
            title="중성화 수술을 진행 하셨나요?"
            containerStyle={styles.checkBox}
            checked={check1}
            onPress={() => setCheck1(!check1)}
            textStyle={{color: '#90560D'}}
            uncheckedColor={'#90560D'}
            checkedColor={'#90560D'}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}>프로필 등록</Button>
      </View>
    </View>
  );
};

export default ProfileHomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
    justifyContent: 'space-evenly',
  },
  textContainer: {
    // flex: 1,
    marginVertical: 50,
    paddingLeft: 12,
  },
  title: {
    color: '#603500',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 8,
  },
  subTitle: {
    color: '#90560D',
    fontSize: 13,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  profileInput: {
    marginVertical: 12,
  },
  checkBoxContainer: {
    marginTop: 8
  },
  checkBox: {
    backgroundColor: Colors.back100,
    color: '#90560D'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: 230,
    height: 60,
    borderRadius: 30,
    marginTop: 50,
  },
});
