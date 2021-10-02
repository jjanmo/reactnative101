import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const useGetLocation = () => {
  const [location, setLocation] = useState({latitude: 0, longitude: 0});

  const getPermission = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    } else if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('🔥', position);
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  };

  useEffect(() => {
    getPermission();
    getLocation();
  }, []);

  return location;
};

export default useGetLocation;
