import { useState } from "react";
import "./App.css";
import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  HStack,
  VStack,
} from "@chakra-ui/react";
import TimeFrequencyPicker from "./components/TimeFrequencyPicker.jsx";
import DailyTimePicker from "./components/DailyTimePicker.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import todoItem from "./components/TodoItem.jsx";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, description: "Buy the bread", isCompleted: false },
    { id: 2, description: "Fix the sink", isCompleted: true },
  ]);

  const createTodo = (value) => {
    return { id: todos.length + 1, description: value, isCompleted: false };
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Center paddingTop={5}>
      <Grid templateAreas={`"main"`}>
        <GridItem borderRadius={4} background="gray.700">
          <Box w="600px">
            <TimeFrequencyPicker />
            <Divider />
            <VStack padding={10} spacing={4}>
              <DailyTimePicker />
              <TodoForm
                onAdd={(value) => setTodos([createTodo(value), ...todos])}

              />
              <TodoList todos={todos}  onDelete={(id)=>deleteTodo(id)} />
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}

export default App;
