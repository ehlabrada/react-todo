import {HStack, Text, VStack} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

const MonthlyTimePicker = ({ currentDate, onDayChange }) => {
    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    };


    return (
        <HStack marginBottom={10} color="whitesmoke">
            <ChevronLeftIcon onClick={() => onDayChange("left")} />
            <VStack>
                <Text fontSize='4xl'> {months[currentDate.getMonth()]} </Text>
            </VStack>
            <ChevronRightIcon onClick={() => onDayChange("right")} />
        </HStack>
    );
};

export default MonthlyTimePicker;