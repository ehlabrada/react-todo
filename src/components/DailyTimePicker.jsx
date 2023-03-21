import {Center, HStack, Text, VStack} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'


const DailyTimePicker = ({currentDate, onDayChange}) => {
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
        11: "December"
    };

    const weekDays = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    };


    return (
            <HStack marginBottom={10} color="whitesmoke">
                <ChevronLeftIcon onClick={() => onDayChange("left")} />
                <VStack>
                    <Text fontSize='4xl'> {weekDays[currentDate.getDay()]} </Text>
                    <Text>{months[currentDate.getMonth()]} {currentDate.getDate()}, {currentDate.getFullYear()} </Text>
                </VStack>
                <ChevronRightIcon onClick={() => onDayChange("right")} />
            </HStack>
    );
};

export default DailyTimePicker;