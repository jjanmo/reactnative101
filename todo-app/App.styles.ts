import { StyleSheet } from 'react-native';
import { theme } from './colors';

export const styles = StyleSheet.create({
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
  headerButton: {
    fontSize: 40,
    color: theme.grey,
  },
  highlighted: {
    color: theme.white,
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
