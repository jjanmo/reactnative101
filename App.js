import React from 'react';
import Loader from './Loader';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = '2a4dfa6f9892a50c75182e50c8cc820d';

export default class extends React.Component {
    state = {
        isLoading: true,
    };

    async getWeather(latitude, longitude) {
        const { data } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
        console.log(data);
    }

    async getLocation() {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            this.setState({ isLoading: false });
        } catch (e) {
            Alert.alert('🚨Can not find Location🚨', 'So Sad 😭');
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { isLoading } = this.state;

        return isLoading ? <Loader /> : null;
    }
}
