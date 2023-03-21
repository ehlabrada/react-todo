import React from "react";
import {Box, Button, HStack, Text} from "@chakra-ui/react";

const TimeFrequencyPicker = () => {
  return (
    <Box>
      <HStack h="50px" justifyContent="space-evenly" color="white">
        <Text as={Button}>Day</Text>
        <Text>Week</Text>
        <Text>Month</Text>
        <Text>Year</Text>
      </HStack>
    </Box>
  );
};

export default TimeFrequencyPicker;
