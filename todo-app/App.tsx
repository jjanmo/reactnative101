import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from './colors';
import { useState } from 'react';

export default function App() {
  const [active, setActive] = useState<'work' | 'travel'>('work');

  const handlePress = () => {
    setActive((prev) => {
      return prev === 'travel' ? 'work' : 'travel';
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={{
              ...styles.button,
              color: active === 'work' ? theme.text : theme.inactiveText,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={{
              ...styles.button,
              color: active === 'travel' ? theme.text : theme.inactiveText,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: theme.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    fontSize: 40,
  },
});
