import "./App.css";
import {Box, Center, Divider, Grid, GridItem, VStack,} from "@chakra-ui/react";
import TimeFrequencyPicker from "./components/TimeFrequencyPicker.jsx";
import DailyTimePicker from "./components/DailyTimePicker.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import useTodos from "./hooks/useTodos.js";

function App() {

  const { todos, ...options} = useTodos()


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
                onAdd={(value) => options.add(value)}

              />
              <TodoList todos={todos}  onDelete={(id)=>options.delete(id)} />
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}

export default App;
