import "./App.css";
import { Box, Center, Divider, Grid, GridItem, VStack } from "@chakra-ui/react";
import TimeFrequencyPicker from "./components/TimeFrequencyPicker.jsx";
import DailyTimePicker from "./components/DailyTimePicker.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import useTodos from "./hooks/useTodos.js";
import useDateHandler from "./hooks/useDateHandler.js";
import MonthlyTimePicker from "./components/MonthlyTimePicker.jsx";

function App() {
  const {
    currentDate,
    timeFrequency,
    handleOnDateChange,
    handleOnChangeTimeFrequency
  } = useDateHandler();
  const { todos, pinnedTodos, ...options } = useTodos(currentDate, timeFrequency);

  const timePicker = (function(){
    let timerSelected = null;
    if (timeFrequency === "daily"){
      timerSelected = <DailyTimePicker
          currentDate={currentDate}
          onDayChange={(change) => handleOnDateChange(change)}
      />
    } else if (timeFrequency === "monthly"){
      timerSelected = <MonthlyTimePicker
          currentDate={currentDate}
          onDayChange={(change) => handleOnDateChange(change)}
      />
    } else if (timeFrequency === "yearly"){
      timerSelected = <MonthlyTimePicker
          currentDate={currentDate}
          onDayChange={(change) => handleOnDateChange(change)}
      />
    }
    return timerSelected;
  }())

  return (
    <Center paddingTop={5}>
      <Grid templateAreas={`"main"`}>
        <GridItem borderRadius={4} background="gray.700">
          <Box w="600px">
            <TimeFrequencyPicker
              timeFrequency={timeFrequency}
              onChangeTimeFrequency={(frequency) => handleOnChangeTimeFrequency(frequency)}
            />
            <Divider />
            <VStack padding={10} spacing={4}>
              {timePicker}
              <TodoForm onAdd={(value) => options.onAdd(value)} />
              <TodoList
                pinnedTodos={pinnedTodos}
                todos={todos}
                onDelete={(id) => options.onDelete(id)}
                onComplete={options.onCheck}
                onPin={options.onPin}
              />
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}

export default App;
