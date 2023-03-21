import {useRef} from "react";
import {Checkbox, HStack, Text, Wrap} from "@chakra-ui/react";
import TodoOptions from "./TodoOptions.jsx";

const TodoItem = ({ todo, onDelete, onComplete, onPin }) => {
  return (
    <HStack marginBottom={4} justifyContent="space-between">
      <Wrap>
        <Checkbox onChange={() => onComplete(todo.id)} isChecked={todo.isCompleted}></Checkbox>
        <Text>{todo.description}</Text>
      </Wrap>

        <TodoOptions todo={todo} onDelete={onDelete} onPin={onPin} />
    </HStack>
  );
};

export default TodoItem;
