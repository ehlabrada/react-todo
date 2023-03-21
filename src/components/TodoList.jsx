import { Box, Divider, Text, VStack } from "@chakra-ui/react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, pinnedTodos, onDelete, onComplete, onPin }) => {
  const allTodos = todos
    .filter((todo) => !todo.isPinned)
    .map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
          onPin={onPin}
        />
      );
    });

  const pinnedTodos_ = pinnedTodos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onComplete={onComplete}
        onPin={onPin}
      />
    );
  });

  return (
    <Box width="100%">
      {pinnedTodos_ && (
        <>
          <VStack align="left">{pinnedTodos_}</VStack>
          <Divider marginY={3} />
        </>
      )}

      {todos.every((todo) => todo.isCompleted === true) ? (
        <VStack align={"left"} spacing={5}>
          <Text fontSize="xl">Hurray you've finished all your tasks</Text>
          <Divider borderColor="gray.200" />
          {allTodos}
        </VStack>
      ) : (
        allTodos
      )}
    </Box>
  );
};

export default TodoList;
