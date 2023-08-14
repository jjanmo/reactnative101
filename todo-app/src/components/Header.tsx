import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useTodoContext, { TodoType } from '../context/TodosContexts';
import { colors } from '../styles';

export default function Header() {
  const { currentType, setCurrentType } = useTodoContext();

  const handlePressHeader = (buttonText: TodoType) => () => {
    setCurrentType(buttonText);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressHeader('work')}>
        <Text
          style={[
            styles.button,
            currentType === 'work' ? styles.highlighted : null,
          ]}
        >
          Work
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressHeader('travel')}>
        <Text
          style={[
            styles.button,
            currentType === 'travel' ? styles.highlighted : null,
          ]}
        >
          Travel
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    fontSize: 40,
    color: colors.grey,
  },
  highlighted: {
    color: colors.white,
  },
});
