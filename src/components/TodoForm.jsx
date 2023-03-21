import {
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement, Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { CalendarIcon } from "@chakra-ui/icons";

const TodoForm = ({ onAdd }) => {
  const inputRef = useRef(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current.value) onAdd(inputRef.current.value);
      }}
    >
      <InputGroup marginBottom={1}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          width="100%"
          borderRadius={5}
          variant="filled"
          placeholder="Add a task..."
        />
      </InputGroup>
        <Text color="gray.500">Due date</Text>
        <Input
            placeholder="Due date"
            size="md"
            type="date"
        />


    </form>
  );
};

export default TodoForm;
