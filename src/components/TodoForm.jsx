import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

const TodoForm = () => {
    return (
        <form>
            <InputGroup>
                <InputLeftElement children={< BsSearch/>}/>
                <Input
                    width='100%'
                    borderRadius={5}
                    variant='filled'
                    color='gray.900'
                    placeholder='Add a task...'
                />
            </InputGroup>
        </form>
    );
};

export default TodoForm;