import { StyleSheet, Text, View, Image } from "react-native";
import coffee from "../../../assets/images/coffee.png";

export function ImageOption() {
  return (
    <View style={styles.optionContainer}>
      <Image source={coffee} resizeMode="contain" style={styles.optionImage} />
      <Text style={styles.optionText}>Glass</Text>
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
