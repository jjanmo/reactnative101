import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from './App.styles';
import { useAsyncStorage } from './hooks';
import * as Crypto from 'expo-crypto';
import Checkbox from 'expo-checkbox';
import { Feather, Ionicons } from '@expo/vector-icons';

type TodoType = 'work' | 'travel';
interface Todo {
  id: string;
  type: TodoType;
  content: string;
  completed: boolean;
}
interface Todos {
  [key: string]: Todo;
}

export default function App() {
  const [currentType, setCurrentType] = useState<TodoType>();
  const [todos, setTodos] = useState<Todos>({});

  const { loadData, storeData } = useAsyncStorage();
  useEffect(() => {
    loadData('@currentType', 'work').then((data) => setCurrentType(data));
    loadData('@todos', {}).then((data) => setTodos(data));
  }, []);

  const [text, setText] = useState<string>('');
  const handleChangeText = (text: string) => {
    setText(text);
  };

  const handlePress = () => {
    setCurrentType((prev) => {
      return prev === 'travel' ? 'work' : 'travel';
    });
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

  useEffect(() => {
    storeData('@currentType', currentType);
    storeData('@todos', todos);
    console.log(currentType, todos);
  }, [currentType, todos]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={[
              styles.headerButton,
              currentType === 'work' ? styles.highlighted : null,
            ]}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={[
              styles.headerButton,
              currentType === 'travel' ? styles.highlighted : null,
            ]}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
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
      <ScrollView>
        {Object.keys(todos)
          .filter((key) => todos[key].type === currentType)
          .map((key) => (
            <View key={key} style={styles.todo}>
              <View style={styles.rowCenter}>
                <Checkbox style={styles.checkbox} />
                <Text style={styles.todoText}>{todos[key].content}</Text>
              </View>
              <View style={styles.rowCenter}>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
                  <Feather name="edit" size={20} color="grey" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
                  <Ionicons name="trash" size={20} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
