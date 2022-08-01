import React from 'react';
import {StyleSheet, Share, View, TouchableOpacity, Image} from 'react-native';

const GuideLike = () => {
  return (
    <View style={{marginTop: 0, width: '10%'}}>
      <TouchableOpacity>
        <Image
          style={styles.shareLogo}
          resizeMode="contain"
          source={require('../../Assets/image/empty-heart.png')}
          title="Calendar"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  shareLogo: {
    width: '100%',
    height: 55,
  },
});

export default GuideLike;
