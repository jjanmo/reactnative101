import { StatusBar } from 'expo-status-bar';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from './colors';
import { useState } from 'react';

export default function App() {
  const [active, setActive] = useState<'work' | 'travel'>('work');
  const [text, setText] = useState<string>('');

  const handlePress = () => {
    setActive((prev) => {
      return prev === 'travel' ? 'work' : 'travel';
    });
  };
  const handleChangeText = (text: string) => {
    console.log(text);
    setText(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={{
              ...styles.button,
              color: active === 'work' ? theme.white : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={{
              ...styles.button,
              color: active === 'travel' ? theme.white : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder={`${
            active === 'work' ? 'Add To Do!' : 'Where do you want to go?'
          }`}
          onChangeText={handleChangeText}
          value={text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: theme.black,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    fontSize: 40,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: theme.white,
    fontSize: 20,
  },
});
