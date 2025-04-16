import {
  Checkbox,
  Stack,
  Icon,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Config = () => {
  return (
    <Box alignItems="center">
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        space={3}
        alignItems="flex-start"
      >
        <Checkbox
          value="orange"
          colorScheme="orange"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="bullseye" />} />}
          defaultIsChecked
        >
          Darts
        </Checkbox>
        <Checkbox
          value="dark"
          colorScheme="dark"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="bat" />} />}
          defaultIsChecked
        >
          Movie
        </Checkbox>
        <Checkbox
          colorScheme="red"
          value="red"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="campfire" />} />}
          defaultIsChecked
        >
          Camping
        </Checkbox>
        <Checkbox
          value="blue"
          colorScheme="blue"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="chess-knight" />} />}
          defaultIsChecked
        >
          Chess
        </Checkbox>

        <Checkbox
          value="green"
          colorScheme="green"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="account-circle" />} />}
          defaultIsChecked
        >
          account
        </Checkbox>

        <Checkbox
          value="gray"
          colorScheme="gray"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="airplane" />} />}
          defaultIsChecked
        >
          airplane
        </Checkbox>

        <Checkbox
          value="yellow"
          colorScheme="yellow"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="alien" />} />}
          defaultIsChecked
        >
          alien
        </Checkbox>
      </Stack>
    </Box>
  );
};

function ConfigScreen() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Config />
      </Center>
    </NativeBaseProvider>
  );
}

export default ConfigScreen;
