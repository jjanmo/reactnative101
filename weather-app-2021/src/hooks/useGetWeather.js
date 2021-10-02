import {useEffect, useState} from 'react';
import Config from 'react-native-config';
import useGetLocation from './useGetLocation';

const useGetWeather = () => {
  const [data, setData] = useState(null);
  const location = useGetLocation();

  const getWeatherDate = async location => {
    try {
      const response = await fetch(
        `${Config.API_URL}?lat=${location.latitude}&lon=${location.longitude}&key=${Config.API_KEY}`,
      ).then(response => response.json());
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location) {
      getWeatherDate(location);
    }
  }, [location]);

  return data;
};

export default useGetWeather;
