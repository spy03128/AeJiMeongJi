

import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../constants/styles';
import Button from '../../components/ui/Button';

const MainHome = props => {
  return (
    <View style={styels.rootContainer}>
        
      <View  style={styels.nav}>
      <Image
            style={styels.none}
            resizeMode="contain"          
            source={require('../../../Assets/image/calendarLogo.png')}

            />
        <Image
            style={styels.logo2}
            resizeMode="contain"          
            source={require('../../../Assets/image/logo2.png')}

            />
        <Image
            style={styels.calendarLogo}
            resizeMode="contain"          
            source={require('../../../Assets/image/calendarLogo.png')}

            />
      </View>
      <View style={styels.content}>
        
      </View>
    </View>
  );
};
export default MainHome;

const styels = StyleSheet.create({
  rootContainer: {
    flex: 1,

    backgroundColor: Colors.back100,
  },
  nav:{
    flex: 1,
    alignItems:"center",
    justifyContent: 'space-between',
    flexDirection:"row",
    
  },
  content:{
    flex: 14,
    backgroundColor: Colors.back200,
  },
  none:{
    marginTop: 5,
    marginRight:10,
    maxWidth: '20%',
    maxHeight: '80%',
    opacity:0,

  },
  logo2: {

    marginTop: 5,
    maxWidth: '50%',
    maxHeight: '60%'
  },
  calendarLogo: {

    marginTop: 5,
    marginRight:10,
    maxWidth: '20%',
    maxHeight: '80%'
    
  },
  logo: {

    marginTop: 50,
    maxWidth: '60%',
    maxHeight: '30%',
  },
 
});
