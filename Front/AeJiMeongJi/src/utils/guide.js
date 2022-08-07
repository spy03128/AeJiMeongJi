import axios from 'axios';

const url = 'http://i7d203.p.ssafy.io:8080';

export const fetchGuideList = async categoryName => {
  // axios 함수를 써야됨
  console.log('axios들어옴');
  const path = `/api/guide?category=${categoryName}`;

  try {
    const res = await axios({
      method: 'get',
      url: url + path,
    });

    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }

  // axios({
  //     method: 'get',
  //     url: 'http://bit.ly/2mTM3nY',
  //     responseType: 'stream'
  //   })
  //     .then(function (response) {
  //       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  //     });
};
