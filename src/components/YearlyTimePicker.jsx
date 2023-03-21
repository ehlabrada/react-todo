import {HStack, Text, VStack} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

const YearlyTimePicker = ({ currentDate, onDayChange }) => {

    return (
        <HStack marginBottom={10} color="whitesmoke">
            <ChevronLeftIcon onClick={() => onDayChange("left")} />
            <VStack>
                <Text fontSize='4xl'> {currentDate.getFullYear()} </Text>
            </VStack>
            <ChevronRightIcon onClick={() => onDayChange("right")} />
        </HStack>
    );
};

export default YearlyTimePicker;