import { Box, Button, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaSmile } from "react-icons/fa";

const moods = [
  { name: "Happy", icon: <FaSmile />, image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbnxlbnwwfHx8fDE3MTM0MTkxNjR8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Energized", icon: <FaSmile />, image: "https://images.unsplash.com/photo-1663426242582-7c707af07128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ2l6ZWQlMjBwZXJzb258ZW58MHx8fHwxNzEzNDE5MTY1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Tired", icon: <FaSmile />, image: "https://images.unsplash.com/photo-1554188572-9d184b57d8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aXJlZCUyMHBlcnNvbnxlbnwwfHx8fDE3MTM0MTkxNjV8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Anxious", icon: <FaSmile />, image: "https://images.unsplash.com/photo-1473106995954-101fc128abc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbnhpb3VzJTIwcGVyc29ufGVufDB8fHx8MTcxMzQxOTE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Motivated", icon: <FaSmile />, image: "https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWQlMjBwZXJzb258ZW58MHx8fHwxNzEzNDE5MTY3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const toast = useToast();
  let moodIndex = 0;

  const handleSwipe = (direction) => {
    if (direction === "left") {
      moodIndex = moodIndex > 0 ? moodIndex - 1 : moods.length - 1;
    } else {
      moodIndex = moodIndex < moods.length - 1 ? moodIndex + 1 : 0;
    }
    toast({
      title: `Mood selected: ${moods[moodIndex].name}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Heading mb={6}>How are you feeling today?</Heading>
      <Box position="relative" w="sm" h="sm" p={4} boxShadow="xl" rounded="lg" overflow="hidden">
        <Image src={moods[moodIndex].image} alt={moods[moodIndex].name} fit="cover" w="100%" h="100%" />
        <Box position="absolute" bottom="0" left="0" w="100%" p={4} bgColor="rgba(0, 0, 0, 0.5)">
          <Text fontSize="xl" color="white">
            {moods[moodIndex].name}
          </Text>
        </Box>
      </Box>
      <Stack direction="row" mt={4} spacing={4}>
        <Button leftIcon={<FaArrowLeft />} colorScheme="pink" onClick={() => handleSwipe("left")}>
          Previous
        </Button>
        <Button rightIcon={<FaArrowRight />} colorScheme="teal" onClick={() => handleSwipe("right")}>
          Next
        </Button>
      </Stack>
    </Flex>
  );
};

export default Index;
