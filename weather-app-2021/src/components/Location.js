import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getCountry} from '../utils/functions';

const Location = ({countryCode, city}) => {
  const [country, setCountry] = useState('');

  useEffect(() => {
    const country = getCountry(countryCode);
    setCountry(country);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.city}>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  country: {
    color: '#799cff',
    fontSize: 30,
    fontStyle: 'italic',
  },
  city: {
    color: '#ed1e79',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Location;
