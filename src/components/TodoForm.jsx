import {
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement, Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

const TodoForm = ({ onAdd }) => {
  const inputDescriptionRef = useRef(null);
  const inputDateRef = useRef(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputDescriptionRef.current.value && inputDateRef.current.value) {
            onAdd(inputDescriptionRef.current.value, inputDateRef.current.value);

            inputDateRef.current.value = ""
            inputDescriptionRef.current.value = ""
        }

      }}
    >
      <InputGroup marginBottom={1}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputDescriptionRef}
          width="100%"
          borderRadius={5}
          variant="filled"
          placeholder="Add a task..."
        />
      </InputGroup>
        <Text color="gray.500">Due date</Text>
        <Input
            ref={inputDateRef}
            placeholder="Due date"
            size="md"
            type="date"
        />


    </form>
  );
};

export default TodoForm;
