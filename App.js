import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ImageOption } from "./src/components/ImageOption";
import question from "./assets/data/oneQuestionWithOption";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map(({ id, image, text }) => (
          <ImageOption key={id} source={image} text={text} />
        ))}
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
