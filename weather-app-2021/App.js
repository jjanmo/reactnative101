import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, ActivityIndicator} from 'react-native';
import Weather from './src/components/Weather';
import Location from './src/components/Location';
import {useGetLocation, useGetWeather} from './src/hooks';

const App = () => {
  const [data, setData] = useState([]);

  const {latitude, longitude} = useGetLocation();

  const weatherData = useGetWeather(latitude, longitude);

  useEffect(() => {
    if (weatherData) {
      setData(weatherData.data);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {weatherData ? (
        <>
          <Location
            countryCode={weatherData.country_code}
            city={weatherData.city_name}
          />
          <Weather data={data} />
        </>
      ) : (
        <View style={styles.wrapper}>
          <ActivityIndicator size="large" color="#ed1e79" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3d8ec',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
