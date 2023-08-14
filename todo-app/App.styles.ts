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
    marginVertical: 20,
    borderRadius: 5,
    backgroundColor: theme.white,
    fontSize: 20,
  },
  todo: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c7ecee',
    borderRadius: 5,
  },
  checkbox: {
    margin: 8,
  },
  todoText: {
    fontSize: 18,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
