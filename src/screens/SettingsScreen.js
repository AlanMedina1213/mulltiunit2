import { View, Text } from "react-native";
import { NativeBaseProvider, useColorMode, useColorModeValue, Center, Box, Button } from "native-base";

function UseColorModeComponent() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Light", "Dark");
  const bg = useColorModeValue("warmGray.50", "coolGray.800");

  return (
    <Center flex={1} bg={bg} p={4}>
      <Box maxW="300" w="100%" mt={10} p={4} borderRadius={10} shadow={2} bg={bg}>
        <Text fontSize="lg" mb={4}>
          The active color mode is{" "}
          <Text bold fontSize="18px">
            {text}
          </Text>
        </Text>
        <Button onPress={toggleColorMode}>
          Toggle Theme
        </Button>
      </Box>
    </Center>
  );
}

function SettingsScreen() {
  return (
    <NativeBaseProvider>
      <UseColorModeComponent />
    </NativeBaseProvider>
  );
}

export default SettingsScreen;
