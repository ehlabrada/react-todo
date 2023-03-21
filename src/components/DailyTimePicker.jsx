import {Center, HStack, Text, VStack} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'


const DailyTimePicker = () => {
    return (
            <HStack marginBottom={10} color="whitesmoke">
                <ChevronLeftIcon/>
                <VStack>
                    <Text fontSize='4xl'> Thursday </Text>
                    <Text>Mar 23, 2017 </Text>
                </VStack>
                <ChevronRightIcon/>
            </HStack>
    );
};

export default DailyTimePicker;