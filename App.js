import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import question from "./assets/data/oneQuestionWithOption";
import { Button } from "./src/components/Button";
import { ImageOption } from "./src/components/ImageOption";

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const onButtonPress = () => {
    console.log("Word Press");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map(({ id, image, text }) => (
          <ImageOption
            key={id}
            source={image}
            text={text}
            isSelected={selectedOption?.id === id}
            onPress={() => setSelectedOption({ id, image, text })}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
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
