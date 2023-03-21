import React from "react";
import {Box, Button, ButtonGroup, HStack,} from "@chakra-ui/react";

const TimeFrequencyPicker = ({timeFrequency, onChangeTimeFrequency}) => {
  return (
    <Box>
      <HStack h="50px" justifyContent="space-evenly" color="white">
        <ButtonGroup>
          <Button isActive={timeFrequency === "daily"} onClick={() => onChangeTimeFrequency("daily")}>Day</Button>
          {/*<Button isActive={timeFrequency === "weekly"} onClick={() => onChangeTimeFrequency("weekly")}>Week</Button>*/}
          <Button isActive={timeFrequency === "monthly"} onClick={() => onChangeTimeFrequency("monthly")}>Month</Button>
          <Button isActive={timeFrequency === "yearly"} onClick={() => onChangeTimeFrequency("yearly")}>Year</Button>
        </ButtonGroup>
      </HStack>
    </Box>
  );
};

export default TimeFrequencyPicker;
