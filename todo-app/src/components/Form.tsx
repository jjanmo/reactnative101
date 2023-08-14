import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import useTodoContext, { Todo } from '../context/TodosContexts';
import * as Crypto from 'expo-crypto';
import { colors } from '../styles';

export default function Form() {
  const { todos, setTodos, currentType } = useTodoContext();

  const [text, setText] = useState<string>('');
  const handleChangeText = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    const key = Crypto.randomUUID();
    const newTodo: Todo = {
      id: key,
      content: text,
      type: currentType!,
      completed: false,
    };
    setTodos({
      ...todos,
      [key]: newTodo,
    });
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={`${
          currentType === 'work' ? 'Add To Do!' : 'Where do you want to go?'
        }`}
        value={text}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 20,
  },
});
