import React from 'react';
import {SafeAreaView, View, StyleSheet, ActivityIndicator} from 'react-native';
import Weather from './src/components/Weather';
import Location from './src/components/Location';
import {useGetWeather} from './src/hooks';

const App = () => {
  const weatherData = useGetWeather();

  return (
    <SafeAreaView style={styles.container}>
      {weatherData ? (
        <>
          <Location
            countryCode={weatherData.country_code}
            city={weatherData.city_name}
          />
          <Weather data={weatherData.data} />
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
    backgroundColor: '#e6deeb',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
