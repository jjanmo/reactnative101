import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import { TodosContextProvider } from './src/context/TodosContexts';

export default function App() {
  return (
    <TodosContextProvider>
      <StatusBar style="auto" />
      <Home />
    </TodosContextProvider>
  );
}
