import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useTodoContext, { TodoType } from '../context/TodosContexts';
import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';
import { colors } from '../styles';

export default function List() {
  const { todos, currentType } = useTodoContext();

  return (
    <ScrollView>
      {Object.keys(todos)
        .filter((key) => todos[key].type === currentType)
        .map((key) => (
          <Todo key={key} {...todos[key]} />
        ))}
    </ScrollView>
  );
}

function Todo({
  id,
  type,
  completed,
}: {
  id: string;
  type: TodoType;
  completed: boolean;
}) {
  const { todos, setTodos } = useTodoContext();

  const handlePressDelete = (id: string) => () => {
    Alert.alert('Really Delete it?', '', [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const newTodos = { ...todos };
          delete newTodos[id];
          setTodos(newTodos);
        },
      },
    ]);
  };

  const handleChangeCheck = () => {
    todos[id].completed = !todos[id].completed;
    setTodos({
      ...todos,
    });
  };

  return (
    <View
      style={[
        styles.todoContainer,
        type === 'work' ? styles.workBg : styles.travelBg,
      ]}
    >
      <View style={styles.rowCenter}>
        <Checkbox
          style={styles.checkbox}
          onValueChange={handleChangeCheck}
          value={completed}
        />
        <Text style={[styles.todoText, completed ? styles.completed : null]}>
          {todos[id].content}
        </Text>
      </View>
      <View style={styles.rowCenter}>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <Feather name="edit" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handlePressDelete(id)}
        >
          <Feather name="trash" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  workBg: {
    backgroundColor: colors.work,
  },
  travelBg: {
    backgroundColor: colors.travel,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
    borderColor: colors.white,
  },
  todoText: {
    fontSize: 20,
    color: colors.white,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
