import React from "react";
import {
    Button,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    VStack,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

const TodoOptions = ({todo: {id, isPinned, isCompleted}, onDelete, onPin}) => {
  return (
    <Popover>
      <PopoverTrigger>
          <IconButton aria-label="Todo Options" icon={<HamburgerIcon />} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Options</PopoverHeader>
        <PopoverBody>
          <VStack>
            <Button onClick={() => onDelete(id)}>Delete</Button>
            <Button isDisabled={isCompleted} onClick={() => onPin(id)}>{isPinned ? "Unpin" : "Pin"} task</Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TodoOptions;
