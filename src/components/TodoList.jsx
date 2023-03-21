import React from "react";
import {Box, HStack, List, ListItem, VStack} from "@chakra-ui/react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos }) => {
  return (
    <Box width="100%">
      {todos.map((todo) => {
        console.log("TODOS",todo)
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </Box>
  );
};

export default TodoList;
