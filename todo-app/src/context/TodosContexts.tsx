import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import useAsyncStorage from '../hooks/useAsyncStorage';

export type TodoType = 'work' | 'travel';
export interface Todo {
  id: string;
  type: TodoType;
  content: string;
  completed: boolean;
}
export interface Todos {
  [key: string]: Todo;
}
export type SetterFn<T> = React.Dispatch<React.SetStateAction<T>>;

interface TodosContextType {
  currentType: TodoType;
  todos: Todos;
  setCurrentType: SetterFn<TodoType>;
  setTodos: SetterFn<Todos>;
}

const TodosContext = createContext({} as TodosContextType);
export default function useTodoContext() {
  return useContext(TodosContext);
}

export function TodosContextProvider({ children }: PropsWithChildren) {
  const [currentType, setCurrentType] = useState<TodoType>('work');
  const [todos, setTodos] = useState<Todos>({});

  const { loadData, storeData } = useAsyncStorage();

  useEffect(() => {
    loadData('@currentType', 'work').then((data) => setCurrentType(data));
    loadData('@todos', {}).then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    storeData('@currentType', currentType);
    storeData('@todos', todos);
  }, [currentType, todos]);

  return (
    <TodosContext.Provider
      value={{
        currentType,
        todos,
        setCurrentType,
        setTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
