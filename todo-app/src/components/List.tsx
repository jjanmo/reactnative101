import { ScrollView } from 'react-native';
import useTodoContext from '../context/TodosContexts';
import Todo from './Todo';

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
