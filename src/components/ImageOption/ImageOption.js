import { StyleSheet, Text, View, Image } from "react-native";

export function ImageOption({ source, text }) {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{ uri: source }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
    borderBottomWidth: 4,
    width: "48%",
    height: "48%",
    alignItems: "center",
    padding: 10,
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {},
});
