

import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../constants/styles';

const MainHome = props => {
    const num = 0;
    const min = 20;
    const km = 1.4;
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
      <View style={styels.contentbox}>
            <View style={styels.profile}>
                
            </View> 
           
            <View style={styels.runningbox}>
                <View style={styels.run1}>
                    <Image
                style={styels.runicon}
                resizeMode="contain"          
                source={require('../../../Assets/image/run-icon.png')}

                />
                </View>
  
                <View style={styels.run2}>
                    
                    <Text style={[styels.font,styels.mainText]}>이번주 산책횟수
                    <Text style={{color:Colors.btnBack100}}>{" "}{num}</Text> 
                    <Text>회</Text>
                    </Text>
                    {num==0?<Text style={[styels.font,styels.subText]}>산책이 필요해요😂</Text>
                    :<Text style={[styels.font,styels.subText]}>최고기록
                    <Text style={{color:Colors.btnBack100}}>{" "}{min}</Text> 
                    <Text>분</Text>
                    <Text style={{color:Colors.btnBack100}}>{" "}{km}</Text> 
                    <Text>km</Text>
                    </Text>}
                </View>
                
            </View>
            <View style={styels.guidebox}>
                
            </View>
      </View>
    </View>
  );
};
export default MainHome;

const styels = StyleSheet.create({
    font:{
        fontFamily:'ONE Mobile POP'
    },
    mainText:{
        fontSize:20,
        lineHeight: 40,
        letterSpacing: 4,
        color:Colors.contentText
    },
    subText:{
        fontSize:18,
        lineHeight: 40,
        letterSpacing: 4,
        color:Colors.contentText
    },
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
  contentbox:{
    flex: 14,
    justifyContent:'center',
    backgroundColor: Colors.back100,
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
  runicon: {

    marginTop: 5,
    maxWidth: '70%',
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
  profile:{
    flex:1.3,

    
  },
  runningbox:{
    flex:1,
    alignSelf:'center',
    backgroundColor: Colors.contentBox,
    width:'80%',
    marginTop:20,
    marginBottom:20,
    borderRadius:20,
    flexDirection:"row",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,

  },
  run1:{
    flex:1,
    alignItems:'flex-end'

  },
  run2:{
    flex:3.5,
    alignItems:'center',
    justifyContent:'center',


  },

  guidebox:{
    flex:1.3,
    alignSelf:'center',
        backgroundColor: Colors.contentBox,
    width:'80%',
    marginTop:20,
    marginBottom:80,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,

  }

 
});
