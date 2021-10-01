import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Calendar from './src/components/Calender';
import Weather from './src/components/Weather';
import Location from './src/components/Location';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calendar />
      <Location />
      <Weather />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default App;
