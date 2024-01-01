import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Text style={{ color: "white" }}>What is going on here now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
