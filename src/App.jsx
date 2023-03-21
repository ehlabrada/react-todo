import "./App.css";
import { Box, Center, Divider, Grid, GridItem, VStack } from "@chakra-ui/react";
import TimeFrequencyPicker from "./components/TimeFrequencyPicker.jsx";
import DailyTimePicker from "./components/DailyTimePicker.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import useTodos from "./hooks/useTodos.js";
import useDateHandler from "./hooks/useDateHandler.js";

function App() {
  const {currentDate, handleOnDateChange} = useDateHandler();
  const { todos, ...options } = useTodos(currentDate);

  return (
    <Center paddingTop={5}>
      <Grid templateAreas={`"main"`}>
        <GridItem borderRadius={4} background="gray.700">
          <Box w="600px">
            <TimeFrequencyPicker />
            <Divider />
            <VStack padding={10} spacing={4}>
              <DailyTimePicker
                currentDate={currentDate}
                onDayChange={(change) => handleOnDateChange(change)}
              />
              <TodoForm onAdd={(value) => options.add(value)} />
              <TodoList todos={todos} onDelete={(id) => options.delete(id)} onComplete={options.onCheck}/>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}

export default App;
