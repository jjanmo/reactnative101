import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useTodoContext, { TodoType } from '../context/TodosContexts';
import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';
import { colors } from '../styles';
import { useState } from 'react';

export default function Todo({
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

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const handlePressEdit = () => {
    setIsEdit(!isEdit);
  };

  const [text, setText] = useState<string>('');
  const handleChangeText = (text: string) => {
    setText(text);
  };
  const handleSubmit = () => {
    // 수정할 내용이 있는 경우만 수정, 없으면 그대로 유지
    if (text) {
      todos[id].content = text;
      setTodos({
        ...todos,
      });
    }

    setText('');
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isEdit && (
        <TextInput
          style={[
            styles.input,
            type === 'work' ? styles.workBg : styles.travelBg,
          ]}
          placeholder={todos[id].content}
          value={text}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmit}
          autoFocus
        />
      )}
      {!isEdit && (
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
            <Text
              style={[styles.todoText, completed ? styles.completed : null]}
            >
              {todos[id].content}
            </Text>
          </View>
          <View style={styles.rowCenter}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={handlePressEdit}
            >
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
      )}
    </>
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
  input: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 20,
    color: colors.white,
  },
});
