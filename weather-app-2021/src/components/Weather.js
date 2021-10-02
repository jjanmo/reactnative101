import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Weather = ({data}) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <FlatList renderItem={data} />
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
