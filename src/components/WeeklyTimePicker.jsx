import {HStack, Text, VStack} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

const WeeklyTimePicker = ({ currentDate, onDayChange }) => {

    return (
        <HStack marginBottom={10} color="whitesmoke">
            <ChevronLeftIcon onClick={() => onDayChange("left")} />
            <VStack>
                <Text fontSize='4xl'> {weekDays[currentDate.getDay(getMonth())]} </Text>
                <Text>{months[currentDate.getMonth()]} {currentDate.getDate()}, {currentDate.getFullYear()} </Text>
            </VStack>
            <ChevronRightIcon onClick={() => onDayChange("right")} />
        </HStack>
    );
};

export default WeeklyTimePicker;