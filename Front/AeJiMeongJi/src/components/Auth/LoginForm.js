import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Button from '../ui/Button';
import Input from './Input';

const LoginForm = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const inputChangeHandler = (inputIdentifier, entredValue) => {
    setInputValues(curValue => {
      return {
        ...curValue,
        [inputIdentifier]: entredValue,
      };
    });

    const loginHandler = () => {};
    // Navigation = useNavigation();
    // Navigation.navigate('Home')
  };

  return (
    <View>
      <Input
        textInputConfig={{
          value: inputValues.email,
          placeholder: 'email',
          autoCapitalize: 'none',
          autoFocus: true,
          onChangeText: inputChangeHandler.bind(this, 'email'),
        }}
      />
      <Input
        textInputConfig={{
          value: inputValues.password,
          placeholder: 'password',
          autoCapitalize: 'none',
          onChangeText: inputChangeHandler.bind(this, 'password'),
        }}
      />
      <View style={styles.btnContainer}>
        <Button style={styles.btn} onPress={loginHandler}>
          로그인
        </Button>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    width: 200,
    marginTop: 24,
    alignSelf: 'center',
  },
});
