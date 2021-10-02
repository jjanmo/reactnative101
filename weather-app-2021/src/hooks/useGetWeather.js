import {useEffect, useState} from 'react';
import Config from 'react-native-config';

const useGetWeather = (latitude, longitude) => {
  console.log(latitude, longitude);
  const [data, setData] = useState(null);

  const getWeatherDate = async () => {
    try {
      const response = await fetch(
        `${Config.API_URL}?lat=${latitude}&lon=${longitude}&key=${Config.API_KEY}`,
      ).then(response => response.json());
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherDate();
  }, []);

  return data;
};

export default useGetWeather;
