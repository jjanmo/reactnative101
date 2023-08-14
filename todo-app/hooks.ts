import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorage() {
  const storeData = async <T>(key: string, newData: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(newData));
    } catch (e) {
      console.log(e);
    }
  };

  const loadData = async <T>(key: string, initialData: T) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (!data) return initialData;

      return JSON.parse(data);
    } catch (e) {
      console.log(e);
    }
  };

  return { storeData, loadData };
}
