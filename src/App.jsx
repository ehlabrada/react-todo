import { useState } from "react";
import "./App.css";
import {Box, Center, Divider, Grid, GridItem, HStack, VStack} from "@chakra-ui/react";
import TimeFrequencyPicker from "./components/TimeFrequencyPicker.jsx";
import DailyTimePicker from "./components/DailyTimePicker.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, description: "Buy the bread", isCompleted: false },
    { id: 2, description: "Fix the sink", isCompleted: true },
  ]);
  return (
    <Center paddingTop={5} >
      <Grid templateAreas={`"main"`}>
        <GridItem borderRadius={4} background="gray.700">
          <Box w="600px" >
            <TimeFrequencyPicker />
            <Divider />
            <VStack padding={10} spacing={4}>
              <DailyTimePicker />
              <TodoForm />
              <TodoList todos={todos} />
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}

export default App;
