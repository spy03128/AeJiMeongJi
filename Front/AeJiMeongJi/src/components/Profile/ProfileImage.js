import {Avatar} from '@rneui/themed';
import React, {useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

const ProfileImage = () => {
  const [ProfileImage, setImage] = useState(
    require('../../Assets/image/Profile.png'),
  );
  const imageAddBtn = require('../../Assets/image/imgAddBtn.png');
  const fileInput = useRef(null);

  return (
    <View style={styles.ImgContainer}>
      <Avatar
        source={ProfileImage}
        size={'xlarge'}
        activeOpacity={0.2}
        containerStyle={styles.Avatar}
        overlayContainerStyle={styles.Avatar}
      />
      {/* 사진 추가 */}
      <Pressable>
        <Image source={imageAddBtn} style={styles.imageAddBtn} />
      </Pressable>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  Avatar: {
    borderRadius: 90,
    width: 230,
    height: 172,
  },
  ImgContainer: {
    marginTop: 100,
    position: 'relative',
  },
  imageAddBtn: {
    position: 'absolute',
    borderRadius: 90,
    width: 40,
    height: 40,
    left: 170,
    bottom: 0,
  },
});

// export default () => {
//   return (
//     <Avatar
//       activeOpacity={0.2}
//       avatarStyle={{}}
//       containerStyle={{ backgroundColor: "#BDBDBD" }}
//       icon={{}}
//       iconStyle={{}}
//       imageProps={{}}
//       onLongPress={() => alert("onLongPress")}
//       onPress={() => alert("onPress")}
//       overlayContainerStyle={{}}
//       placeholderStyle={{}}
//       rounded
//       size="large"
//       source={{
//         uri:
//           "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
//       }}
//       title="P"
//       titleStyle={{}}
//     />
//   );
// }
