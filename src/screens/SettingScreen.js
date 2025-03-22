import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button
              title="Go to Detail"
              onPress={() =>
                navigation.navigate("Detail", {
                  itemId: 86,
                  otherParam: "anything you want here",
                })
              }
            />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SettingsScreen;
