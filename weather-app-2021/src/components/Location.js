import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const Location = () => {
  const [location, setLocation] = useState({latitude: 0, longitude: 0});

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{location.latitude}</Text>
      <Text style={styles.location}>{location.longitude}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  location: {
    color: 'white',
  },
});

export default Location;
