import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../constants/styles';
import Profile from '../../components/Home/Profile';

const MainHome = ({navigation}) => {
  const num = 0;
  const min = 20;
  const km = 1.4;
  var [isPress, setIsPress] = React.useState(false);
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.nav}>
          <Image
            style={styles.none}
            resizeMode="contain"
            source={require('../../Assets/image/calendarLogo.png')}
          />
          <Image
            style={styles.logo2}
            resizeMode="contain"
            source={require('../../Assets/image/logo2.png')}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CalendarHome');
            }}
            style={{paddingLeft: 24}}>
            <Image
              style={styles.calendarLogo}
              resizeMode="contain"
              source={require('../../Assets/image/calendarLogo.png')}
              title="Calendar"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contentbox}>
          <Profile />

          <View style={styles.guidebox}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Image
                style={styles.notice}
                resizeMode="contain"
                source={require('../../Assets/image/notice-logo.png')}
              />
              <Text style={[styles.font, styles.titleText4]}>
                예방접종한 지 일년이 지났어요!
              </Text>
            </View>
          </View>

          <View style={styles.runningbox}>
            <View style={styles.run1}>
              <Image
                style={styles.runicon}
                resizeMode="contain"
                source={require('../../Assets/image/run-icon.png')}
              />
            </View>

            <View style={styles.run2}>
              <Text style={[styles.font, styles.mainText]}>
                이번주 산책횟수
                <Text style={{color: Colors.btnBack100}}> {num}</Text>
                <Text>회</Text>
              </Text>
              {num == 0 ? (
                <Text style={[styles.font, styles.subText]}>
                  산책이 필요해요😂
                </Text>
              ) : (
                <Text style={[styles.font, styles.subText]}>
                  최고기록
                  <Text style={{color: Colors.btnBack100}}> {min}</Text>
                  <Text>분</Text>
                  <Text style={{color: Colors.btnBack100}}> {km}</Text>
                  <Text>km</Text>
                </Text>
              )}
            </View>
          </View>

          <View style={styles.box}>
            <View
              style={{
                flexDirection: 'row',
                height: 40,
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.font, styles.subText]}>To-Do</Text>
              <Image
                style={styles.plus}
                resizeMode="contain"
                source={require('../../Assets/image/plus.png')}
              />
            </View>

            <View style={styles.todobox}>
              <View style={{flexDirection: 'row'}}>
                {isPress ? (
                  <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => {
                      setIsPress(!isPress);
                    }}
                  />
                ) : (
                  <TouchableOpacity
                    style={styles.checknonbox}
                    onPress={() => {
                      setIsPress(!isPress);
                    }}
                  />
                )}
                <Text style={[styles.font, styles.titleText]}>
                  지은이 발표시키기
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.checkbox} />
                <Text style={[styles.font, styles.titleText]}>
                  도현이 RN 공부시키기
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.checkbox} />
                <Text style={[styles.font, styles.titleText]}>
                  경열이 스마트워치 연동시키기
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View
              style={{
                flexDirection: 'row',
                height: 40,
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.font, styles.subText]}>인기 방문 장소</Text>
              <Image
                style={styles.plus}
                resizeMode="contain"
                source={require('../../Assets/image/plus.png')}
              />
            </View>

            <View style={styles.placebox}>
              <Image
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 20,
                }}
                resizeMode="cover"
                source={require('../../Assets/image/강아지숲.png')}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[styles.font, styles.subText]}>
                  강아지 숲
                  <Text style={[styles.font, styles.titleText2]}>
                    {'  '}테마파크
                  </Text>
                </Text>
                <Text style={{lineHeight: 40, marginRight: 10}}>
                  <Text style={{color: 'red'}}>★ </Text>4.3/5
                </Text>
              </View>
            </View>
            <View style={[styles.placebox, styles.placesubBox]}>
              <View style={[styles.placesubcontent, {marginRight: 5}]}>
                <Image
                  style={{
                    width: '100%',
                    height: 150,
                    borderRadius: 20,
                  }}
                  resizeMode="cover"
                  source={require('../../Assets/image/마이무.png')}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[styles.font, styles.titleText]}>
                    마이무
                    <Text style={[styles.font, styles.titleText3]}>
                      {'  '}동물사료제조
                    </Text>
                  </Text>
                </View>
                <Text style={{lineHeight: 20, marginRight: 10}}>
                  <Text style={{color: 'red'}}>★ </Text>4.21/5
                </Text>
              </View>
              <View style={[styles.placesubcontent, {marginLeft: 5}]}>
                <Image
                  style={{
                    width: '100%',
                    height: 150,
                    borderRadius: 20,
                  }}
                  resizeMode="cover"
                  source={require('../../Assets/image/쿨쿨펫.png')}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[styles.font, styles.titleText]}>
                    쿨쿨펫
                    <Text style={[styles.font, styles.titleText3]}>
                      {'  '}반려동물호텔
                    </Text>
                  </Text>
                </View>
                <Text style={{lineHeight: 20, marginRight: 10}}>
                  <Text style={{color: 'red'}}>★ </Text>4.8/5
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View
              style={{
                flexDirection: 'row',
                height: 40,
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.font, styles.subText]}>애견 가이드</Text>
            </View>

            <View style={styles.guideclickbox}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 20,
                  marginTop: -10,
                }}
                resizeMode="contain"
                source={require('../../Assets/image/banner1.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default MainHome;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'ONE Mobile POP',
  },
  contentFont: {
    fontFamily: 'ONE Mobile Regular',
    fontWeight: 'bold',
  },
  dday: {
    fontSize: 31,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.btnBack100,
  },

  mainText: {
    fontSize: 20,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  subText: {
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },

  titleText: {
    fontSize: 14,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  titleText2: {
    fontSize: 12,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  titleText3: {
    fontSize: 10,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  titleText4: {
    fontSize: 14,
    lineHeight: 40,
    letterSpacing: 2,
    color: Colors.contentText,
  },
  contentText: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 2,
    color: Colors.contentText,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
  },
  nav: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentbox: {
    flex: 14,
    justifyContent: 'center',
    backgroundColor: Colors.back100,
  },
  none: {
    marginTop: 5,
    marginRight: 10,
    maxWidth: '20%',
    maxHeight: '80%',
    opacity: 0,
  },
  logo2: {
    marginTop: 5,
    maxWidth: '50%',
    maxHeight: '60%',
  },
  notice: {
    maxWidth: '20%',
    maxHeight: '100%',
  },
  runicon: {
    marginTop: 5,
    maxWidth: '70%',
    maxHeight: '60%',
  },
  calendarLogo: {
    marginTop: 5,
    marginRight: 10,
    maxWidth: '40%',
    maxHeight: '80%',
  },
  logo: {
    marginTop: 50,
    maxWidth: '60%',
    maxHeight: '30%',
  },
  profile: {
    flex: 1.3,
    height: 150,
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
    width: '80%',
    flexDirection: 'row',
  },
  profile1: {
    flex: 1,
    width: '50%',
    padding: 10,
  },
  profile1sub1: {
    flex: 2.5,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: Colors.contentBox,
    borderColor: Colors.btnBack100,
    borderWidth: 2,
    flexDirection: 'row',
  },
  name1: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  name2: {
    flex: 2.5,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  profile1sub2: {
    flex: 5,
  },
  profile2: {
    flex: 1,
  },
  runningbox: {
    height: 350,
    alignSelf: 'center',
    backgroundColor: Colors.contentBox,
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  run1: {
    flex: 1,
    alignItems: 'flex-end',
  },
  run2: {
    flex: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  guidebox: {
    height: 70,
    alignSelf: 'center',
    width: '80%',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 20,
    marginTop: -10,
    borderBottomColor: Colors.btnBack100,
    borderBottomWidth: 1,
  },
  box: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 20,
    marginBottom: 70,
  },
  todobox: {
    height: 150,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: Colors.contentBox,
    borderRadius: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  checkbox: {
    borderWidth: 2,
    borderColor: Colors.back200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  checknonbox: {
    borderWidth: 2,
    borderColor: Colors.back200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    width: 20,
    height: 20,
    backgroundColor: Colors.back100,
    borderRadius: 100,
  },
  plus: {
    marginTop: 5,
    maxWidth: '40%',
    maxHeight: '80%',
    marginRight: -20,
  },

  placebox: {
    height: 240,
    width: '100%',
    borderRadius: 20,
    marginBottom: 20,
  },
  placesubBox: {
    flexDirection: 'row',
    marginBottom: -10,
  },
  placesubcontent: {
    flex: 1,
  },
  guideclickbox: {
    height: 150,
    alignSelf: 'center',
    backgroundColor: Colors.contentBox,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
