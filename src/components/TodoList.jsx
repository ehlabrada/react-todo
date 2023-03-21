import {Box, Divider, StackDivider, Text, VStack} from "@chakra-ui/react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, onDelete, onComplete }) => {
  const allTodos = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onComplete={onComplete}
      />
    );
  });

  return (
    <Box width="100%">
      {todos.every(todo => todo.isCompleted===true) ? (
        <VStack  align={"left"}  spacing={5}>
          <Text fontSize="2xl">Hurray you've finished all your tasks</Text>
          <Divider borderColor='gray.200' />
          {allTodos}
        </VStack>
      ) : (
        allTodos
      )}
    </Box>
  );
};

export default TodoList;
