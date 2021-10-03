import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const Day = props => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.date}>
            {props.valid_date.replace(/[-]/g, ' ')}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.weather}>{props.weather.description}</Text>
        </View>
        <View>
          <Text style={styles.high}>▲ {props.high_temp}</Text>
          <Text style={styles.low}>▼ {props.low_temp}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '80%',
    height: '80%',
    backgroundColor: '#e3d8ec',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#a095a8',
    borderWidth: 0.5,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  weather: {
    color: '#22a6b3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  high: {
    fontSize: 20,
    color: '#D24E44',
  },
  low: {
    fontSize: 20,
    color: '#1261C4',
  },
});

export default Day;
