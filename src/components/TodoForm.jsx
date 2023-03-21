import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

const TodoForm = ({onAdd}) => {
    const inputRef = useRef(null)
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (inputRef.current.value) onAdd(inputRef.current.value)
        }}>
            <InputGroup >
                <InputLeftElement children={< BsSearch/>}/>
                <Input
                    ref={inputRef}
                    width='100%'
                    borderRadius={5}
                    variant='filled'
                    placeholder='Add a task...'
                />
            </InputGroup>
        </form>
    );
};

export default TodoForm;