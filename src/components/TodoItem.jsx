import React from "react";
import {Checkbox, HStack, Text, Wrap} from "@chakra-ui/react";
import TodoOptions from "./TodoOptions.jsx";

const TodoItem = ({ todo: { id, description, isCompleted }, onDelete }) => {
  return (
    <HStack marginBottom={4} justifyContent="space-between">
      <Wrap>
        <Checkbox isChecked={isCompleted}></Checkbox>
        <Text>{description}</Text>
      </Wrap>

        <TodoOptions id={id} onDelete={onDelete} />
    </HStack>
  );
};

export default TodoItem;
