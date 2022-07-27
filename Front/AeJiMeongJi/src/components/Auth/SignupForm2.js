import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import {Alert, StyleSheet, TextInput, View, Text} from 'react-native';
import Button from '../ui/Button';
import {Button as Btn} from '@rneui/themed';
import Input from './Input';
import axios from 'axios';
import { Provider } from 'react-redux';


const SignupForm2 = () => {
  const email = useSelector(state => state.user.email);
  const password = useSelector(state => state.user.password);


  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState({
    email,
    password,
    name: '',
    nickname: '',
    phone: '',
  });
  const [phoneIsAuthenticated, setPhoneIsAuthenticated] = useState()
  // regex
  const nameRegex = /^[가-힣]{2,4}$/;
  const nicknameRegex = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
  const phoneRegex = /^[0-9]{0,11}$/;

  // 유효성
  const nameIsValid = nameRegex.test(inputValues.name);
  const nicknameIsValid = nicknameRegex.test(inputValues.nickname);
  const phoneIsValid = phoneRegex.test(inputValues.phone);

  const [errors, setErrors] = useState({
    name: true,
    nickname: true,
    phone: true,
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues(curValue => {
      return {
        ...curValue,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const onBlurHandler = inputIdentifier => {
    setErrors(curValue => {
      switch (inputIdentifier) {
        case 'name':
          return {
            ...curValue,
            [inputIdentifier]: nameIsValid,
          };
        case 'nickname':
          return {
            ...curValue,
            [inputIdentifier]: nicknameIsValid,
          };
        case 'phone':
          return {
            ...curValue,
            [inputIdentifier]: phoneIsValid,
          };
        default:
          break;
      }
    });
  };

  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);
  const [loading, setLoading] = useState(false);

  const phoneAuthHandler = () => {
    // Loading 중일 때 버튼을 인증 요청 => 확인
    if (!loading) {
      setLoading(true);
      timerId.current = setInterval(() => {
        setMin(parseInt(time.current / 60));
        setSec(time.current % 60);
        time.current -= 1;
      }, 1000);
      if (time.current <= 0) {
        clearInterval(timerId.current);
      }
    } else {
      // backend에 데이터 보내고
      const fetchPhoenAuthenticate = async () => {
        const res = await axios({
          method: 'POST',
        })
        if (res.ok) {
          setPhoneIsAuthenticated(true)
        }
    }}
  };

  // 클릭하면 서버에 문자 요청,

  const submitHandler = () => {
    // if (!nameIsValid) {
    //   Alert.alert('email을 확인해주세요');
    //   return;
    // } else if (!nicknameIsValid) {
    //   Alert.alert('password를 확인해주세요');
    //   return;
    // } else if (!phoneIsValid) {
    //   Alert.alert('password가 일치하지 않습니다.');
    //   return;
    // } else if (!phoneIsAuthenticated) {
      // return
    // }

    // backend에 쏨
    navigation.replace('Home');
  };

  const btnChangeHandler = indentifier => {};
  return (
    <View>
      <Input
        textInputConfig={{
          value: inputValues.email,
          placeholder: '이름',
          autoCapitalize: 'none',
          autoFocus: true,
          onChangeText: inputChangeHandler.bind(this, 'name'),
          onBlur: onBlurHandler.bind(this, 'name'),
        }}
        // style={!errors.email && !emailIsValid ? styles.input : null}
      />
      <Input
        textInputConfig={{
          value: inputValues.password,
          placeholder: '닉네임',
          autoCapitalize: 'none',
          onChangeText: inputChangeHandler.bind(this, 'nickname'),
          onBlur: onBlurHandler.bind(this, 'nickname'),
        }}
        // style={!errors.password && !passwordIsValid ? styles.input : null}
      />
      <View style={styles.phone}>
        {!loading ? (
          <Input
            textInputConfig={{
              value: inputValues.confirmPassword,
              placeholder: '휴대폰번호, 숫자만 입력해주세요.',
              autoCapitalize: 'none',
              keyboardType: 'numeric',
              onChangeText: inputChangeHandler.bind(this, 'phone'),
              onBlur: onBlurHandler.bind(this, 'phone'),
            }}
            style={styles.btnCntr}
            // style={
            //   !confirmPasswordIsValid && !errors.confirmPassword
            //     ? styles.input
            //     : null
            // }
          />
        ) : (
          <Input
            textInputConfig={{
              placeholder: '인증번호를 입력해주세요',
              keyboardType: 'numeric',
            }}
          />
        )}
        {!loading && (
          <View style={styles.btnCntr}>
            <Btn
              style={styles.btn}
              title="인증"
              type="clear"
              onPress={phoneAuthHandler}></Btn>
          </View>
        )}
        {loading && time.current > 0 && (
          <View style={styles.btnCntr}>
            <Btn
              type="clear"
              style={styles.btn}
              title="확인"
              onPress={phoneAuthHandler}></Btn>
            <Text>
              {min}분 {sec}초
            </Text>
          </View>
        )}
        {loading && time.current < 0 && (
          <View style={styles.btnCntr}>
            <Btn
              style={styles.btn}
              onPress={changeBtnHandler}
              type="clear"
              title="재요청"></Btn>
          </View>
        )}
      </View>
      {errors.phone && !phoneIsValid && (
        <View>
          <Text style={styles.errorMessage}>숫자만 입력해주세요.</Text>
        </View>
      )}
      <View style={styles.btnContainer}>
        <Button style={styles.btn} onPress={submitHandler}>
          회원가입
        </Button>
      </View>
    </View>
  );
};

export default SignupForm2;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    width: 200,
    marginTop: 24,
    alignSelf: 'center',
  },
  input: {
    borderColor: 'red',
  },
  errorMessage: {
    fontSize: 8,
    fontWeight: 'bold',
    marginTop: 4,
    color: 'red',
    paddingLeft: 8,
  },
  phone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnCntr: {
    paddingHorizontal: 5,
  },
  btn: {
    flex: 1,
    paddingHorizontal: 30,
  },
  cntr: {
    minWidth: '30%',
  },
});
