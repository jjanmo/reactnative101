import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Location = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>Location</Text>
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
