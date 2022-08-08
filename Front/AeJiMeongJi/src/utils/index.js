import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { refresh } from './auth';

// 요청 인터셉터 추가하기

axios.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(
  response => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async error => {
    const {
      config,
      response: {status},
    } = error;
    try {
      if (status === 401) {
        if (error.response.data.message === '토큰이 유효하지 않습니다.') {
          const originalRequest = config;
          const refreshToken = await AsyncStorage.getItem('refresh');
          console.log('REFRESH 요청');

          const {data} = await refresh(refreshToken);
          console.log('refresh 요청 이후, refresh 진입이 안됨.');
          const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
            data;
          await AsyncStorage.multiSet([
            ['accessToken', newAccessToken],
            ['refreshToken', newRefreshToken],
          ]);
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          console.log('실패 요청 재요청');
          return axios(originalRequest);
        }
      }
      // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청

      return Promise.reject(error);
    } catch (error) {
      console.log(error.message);
    }
  },
);

export default axios;
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import {refresh} from './auth';

// axios.interceptors.request.use(
//   function (config) {
//     // 요청이 전달되기 전에 작업 수행
//     return config;
//   },
//   function (error) {
//     // 요청 오류가 있는 작업 수행
//     return Promise.reject(error);
//   },
// );

// let isTokenRefreshing = false;
// let refreshSubscribers = [];

// const onTokenRefreshed = accessToken => {
//   refreshSubscribers.map(callback => callback(accessToken));
//   console.log('초기화');
//   refreshSubscribers = [];
// };

// console.log(refreshSubscribers, '리프레쉬 서브 스크라이버스');

// const addRefreshSubscriber = callback => {
//   refreshSubscribers.push(callback);
// };

// // 응답 인터셉터 추가하기
// axios.interceptors.response.use(
//   response => {
//     // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 데이터가 있는 작업 수행
//     return response;
//   },
//   async error => {
//     const {
//       config,
//       response: {status},
//     } = error;

//     try {
//       const originalRequest = config;
//       console.log(config, 'config?');
//       console.log(status);

//       if (status === 0) {
//         return error.response
//       }

//       // Prevent infinite loops
//       if (
//         error.response.status === 401 &&
//         originalRequest.url ===
//           'http://i7d203.p.ssafy.io:8080' + '/api/auth/issue'
//       ) {
//         return Promise.reject(error);
//       }

//       if (status===500) {
//         return error.response
//       }

//       // if (status === 401) {
//       // if (!isTokenRefreshing) {
//       console.log(status);
//       isTokenRefreshing = true;
//       console.log('출력됨');
//       const refreshToken = await AsyncStorage.getItem('refresh');
//       console.log(refreshToken, '출력이 안됨');
//       const {data} = await refresh(refreshToken);
//       const {accessToken: newAccessToken, refreshToken: newRefreshToken} = data;
//       await AsyncStorage.multiSet([
//         ['token', newAccessToken],
//         ['refresh', newRefreshToken],
//       ]);
//       isTokenRefreshing = false;
//       axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
//       console.log('갱신 성공');
//       onTokenRefreshed(newAccessToken);
//       // }
//       const retryOriginalRequest = new Promise(resolve => {
//         addRefreshSubscriber(accessToken => {
//           originalRequest.headers.Authorization = 'Bearer ' + accessToken;
//           resolve(axios(originalRequest));
//         });
//       });
//       console.log(retryOriginalRequest, 'retry');
//       return retryOriginalRequest;
//       // }
//     } catch (error) {
//       console.log(error.response, '여기서 throw');
//     }
//     return Promise.reject(error);
//   },
// );

// export default axios;
