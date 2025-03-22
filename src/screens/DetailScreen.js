import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function DetailScreen({ route }) {
  const navigation = useNavigation();
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Detail", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go Back to First Screen"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

export default DetailScreen;
