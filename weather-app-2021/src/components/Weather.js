import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Day from './Day';

const Weather = ({data}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled>
        {data &&
          data.length > 0 &&
          data.map((item, index) => <Day key={index} {...item} />)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
});

export default Weather;
