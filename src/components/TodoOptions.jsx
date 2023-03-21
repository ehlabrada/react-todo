import React from "react";
import {
    Button, IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent, PopoverHeader,
    PopoverTrigger,
    VStack,
} from "@chakra-ui/react";
import TodoOptionsIcon from "./TodoOptionsIcon.jsx";
import {HamburgerIcon} from "@chakra-ui/icons";

const TodoOptions = () => {
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
            <Button>Delete</Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TodoOptions;
