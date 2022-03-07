import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ImageOption } from "./src/components/ImageOption/ImageOption";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which of this is a glass?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption />
        <ImageOption />
        <ImageOption />
        <ImageOption />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});
