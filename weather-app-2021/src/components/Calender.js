import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>Calendar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  date: {
    color: 'white',
  },
});

export default Calendar;
