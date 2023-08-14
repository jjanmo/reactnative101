import { StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import { colors } from '../styles';
import Form from '../components/Form';
import List from '../components/List';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: colors.black,
  },
});
