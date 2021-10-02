import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import Calendar from './src/components/Calender';
import Weather from './src/components/Weather';
import Location from './src/components/Location';
import useGetLocation from './src/hooks/useGetLocation';

const App = () => {
  const {latitude, longitude} = useGetLocation();

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
