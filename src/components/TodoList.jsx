import React from "react";
import {Box, HStack, List, ListItem, VStack} from "@chakra-ui/react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, onDelete }) => {
  return (
    <Box width="100%">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />;
      })}
    </Box>
  );
};

export default TodoList;
