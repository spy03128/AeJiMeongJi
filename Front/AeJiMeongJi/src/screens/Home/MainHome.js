

import React from 'react';
import {Image, StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/styles';

const MainHome = props => {
    const num = 0;
    const min = 20;
    const km = 1.4;
    var [ isPress, setIsPress ] = React.useState(false);
  return (
    <ScrollView>
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
                <Text style={[styels.font,styels.titleText]}>강아지에게 
                    <Text style={{color:Colors.btnBack100}}>{" "}초콜렛</Text> 
                    <Text>은 절대 안돼요!</Text>
                </Text>
                <Text style={[styels.contentFont,styels.contentText]}>
                여기에 필요한 내용을 적는거야 예를 들면 예방 접종이 얼마 남지 않았다 뭐이런 이야기도 적고 이번주에 꼭 해야하는 일 이런걸 데이터베이스에 저장해두고 알려주는거지 그렇게 하면 여기를 채울 수 있지 않ㅇ르까?
                </Text>
            </View>
            <View style={styels.box}>
                <View style={{flexDirection:'row',height:40,justifyContent: 'space-between'}}>
                    <Text style={[styels.font,styels.subText]}>To-Do</Text>
                    <Image
                    style={styels.plus}
                    resizeMode="contain"          
                    source={require('../../../Assets/image/plus.png')}

                    />
                </View>
                <View style={styels.todobox}>
                    <View style={{flexDirection:'row'}}>
                        {isPress?<TouchableOpacity style={styels.checkbox} onPress={()=>{
                            setIsPress(!isPress)
                        }} />:<TouchableOpacity style={styels.checknonbox} onPress={()=>{
                            setIsPress(!isPress)
                        }} />}
                        <Text style={[styels.font,styels.titleText]}>지은이 발표시키기</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styels.checkbox} />
                        <Text style={[styels.font,styels.titleText]}>도현이 RN 공부시키기</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styels.checkbox} />
                        <Text style={[styels.font,styels.titleText]}>경열이 스마트워치 연동시키기</Text>
                    </View>
                    
                 
                </View>
            </View>
      </View>
    </View>
    </ScrollView>
  );
};
export default MainHome;

const styels = StyleSheet.create({
    font:{
        fontFamily:'ONE Mobile POP'
    },
    contentFont:{
        fontFamily:'ONE Mobile Regular',
        fontWeight: 'bold',
 
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
   
    titleText:{
        fontSize:14,
        lineHeight: 40,
        letterSpacing: 4,
        color:Colors.contentText
    },
    contentText:{
        fontSize:12,
        lineHeight: 20,
        letterSpacing: 2,
        color:Colors.contentText
    },
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
  },
  nav:{
    height:50,
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
    height:150,
    
  },
  runningbox:{
    height:150,
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
    height:170,
    alignSelf:'center',
    backgroundColor: Colors.contentBox,
    width:'80%',
    marginTop:20,
    marginBottom:20,
    borderRadius:20,
    paddingLeft:20,
    paddingTop:10,
    paddingRight:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  box:{
    alignSelf:'center',
    width:'80%',
    marginTop:20,
    marginBottom:80,
    
  },
  todobox:{
    height:150,
    alignSelf:'center',
    width:'100%',
    backgroundColor: Colors.contentBox,
    borderRadius:20,
    paddingLeft:20,
    paddingTop:10,
    paddingRight:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  checkbox:{
    borderWidth:2,
    borderColor:Colors.back200,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginRight:10,
    width:20,
    height:20,
    backgroundColor:'#fff',
    borderRadius:100,
  },
  checknonbox:{
    borderWidth:2,
    borderColor:Colors.back200,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginRight:10,
    width:20,
    height:20,
    backgroundColor:Colors.back100,
    borderRadius:100,
  },
  plus: {
  
    marginTop: 5,
    maxWidth: '40%',
    maxHeight: '80%',
    marginRight:-20,
    
  },
});
