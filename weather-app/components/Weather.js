import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { WeatherOptions } from './WeatherOptions';

export default function Weather({ temp, condition, city }) {
    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <LinearGradient style={styles.container} colors={WeatherOptions[condition].gradient}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name={WeatherOptions[condition].icon} size={300} color={'white'} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.weatherText}>
                        <Text style={styles.tempText}>{`${Math.round(temp)} º`}</Text>
                        <Text style={styles.conditionText}>{condition}</Text>
                    </View>
                    <View style={styles.bar} />
                    <Text style={styles.locationText}>{city}</Text>
                </View>
            </LinearGradient>
        </>
    );
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    codition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Mist',
        'Haze',
        'Smoke',
        'Dust',
        'Fog',
        'Sand',
        'Dust',
        'Ash',
        'Squall',
        'Tornado',
        'Clear',
        'Clouds',
    ]),
    city: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    weatherText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tempText: {
        color: '#2c3e50',
        fontSize: 50,
        fontWeight: 'bold',
    },
    conditionText: {
        color: '#2c3e50',
        fontSize: 30,
        lineHeight: 80,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    bar: {
        flex: 0.05,
        backgroundColor: 'white',
        alignItems: 'stretch',
        marginHorizontal: 10,
        marginBottom: 20,
    },
    locationText: {
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#34495e',
    },
});
