import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const Location = ({latitude, longitude}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{latitude}</Text>
      <Text style={styles.location}>{longitude}</Text>
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
