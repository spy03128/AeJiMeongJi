import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import styled from 'styled-components';
import {Platform, PermissionsAndroid} from 'react-native';

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    }
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
}

function App() {
  const [location, setLocation] = useState();
  useEffect(() => {
    requestPermission().then(result => {
      console.log({result});
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation(pos.coords);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          },
        );
      }
    });
  }, []);

  if (!location) {
    return (
      <View style={{flex: 1}}>
        <Text style={{flex: 1}}>Splash Screen</Text>
      </View>
    );
  }

  return (
    <>
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="this is a marker"
            description="this is a marker example"
          />
        </MapView>
      </View>
    </>
  );
}
// const styels = StyleSheet.create({

// const View = styled.View`
//   flex: 1;
// `;

// const Text = styled.Text`
//   flex: 1;
// `;

// const Map = styled(MapView)`
//   flex: 1;
// `;

export default App;
