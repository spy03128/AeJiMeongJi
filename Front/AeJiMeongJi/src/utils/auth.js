import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const url = 'http://i7d203.p.ssafy.io:8080';

export const login = async (email, password) => {
  const path = '/api/auth/login';

  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      data: {
        email,
        password,
      },
    });
    console.log(res.data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async ({email, password, name, nickname, phone}) => {
  console.log(email, password, name, nickname, phone);
  const path = '/api/signup';
  try {
    await axios({
      method: 'POST',
      url: url + path,
      data: {
        email,
        password,
        username: name,
        nickname,
        phoneNumber: phone,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// 인증번호 요청
export async function fetchCertHandler(phone) {
  const path = '/api/phoneauth';
  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      data: {
        phoneNumber: phone,
      },
    });
    console.log(res, '리스폰스');

    return res.data.phoneUUID;
  } catch (error) {
    console.log(error, '인증번호 요청에러');
  }
}

export const confirmCertHandler = async (authNumber, phoneUUID) => {
  const path = '/api/phoneauth/verify';
  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      data: {
        phoneUUID,
        authNumber,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};



export const getMemberId = async () => {
  const jwt = await AsyncStorage.getItem('token');
  const decodedJwt = jwt_decode(jwt);
  const memberId = decodedJwt.memberId;
  return memberId;
};
