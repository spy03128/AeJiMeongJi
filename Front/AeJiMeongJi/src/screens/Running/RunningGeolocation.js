import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider, Appbar, Card} from 'react-native-paper';
import MapView, {Marker, Polyline} from 'react-native-maps';
const MyWebtutsComponent = () => {
  const [latitude, setLatitude] = React.useState();
  const [longitude, setLongitude] = React.useState();

  React.useEffect(() => {}, [latitude, longitude]);

  const [coordinates] = React.useState([
    {
      latitude: 22.306885,
      longitude: 70.780538,
    },
    {
      latitude: 22.310696,
      longitude: 70.803152,
    },
    {
      latitude: 22.293067,
      longitude: 70.791559,
    },
    {
      latitude: 22.306885,
      longitude: 70.780538,
    },
  ]);
  return (
    <Provider>
      <View style={styles.mainbox}>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 22.310617,
            longitude: 70.789841,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0321,
          }}>
          <Polyline
            coordinates={coordinates}
            strokeColor="#000"
            strokeColors={['#7F0000']}
            strokeWidth={2}
          />
        </MapView>
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  mainbox: {
    textAlign: 'center',
    margin: 0,
    flex: 5,
    justifyContent: 'space-between',
  },
  mapView: {
    flex: 25,
  },
});
export default MyWebtutsComponent;
