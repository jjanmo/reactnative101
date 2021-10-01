import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Weather = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.weather}>Weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellowgreen',
  },
  weather: {
    color: 'white',
  },
});

export default Weather;
