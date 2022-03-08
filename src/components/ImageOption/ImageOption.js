import PropTypes from "prop-types";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export const ImageOption = ({ source, text, isSelected, onPress }) => {
  return (
    <Pressable
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
      onPress={onPress}
    >
      <Image
        source={{ uri: source }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text style={!isSelected ? styles.optionText : styles.selectedText}>
        {text}
      </Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  source: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  isSelected: false,
  onPress: () => null,
};

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
  selectedContainer: {
    backgroundColor: "#DDf4FE",
    borderColor: "#81d5fe",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontWeight: "bold",
  },
  selectedText: {
    color: "#40bef7",
    fontWeight: "bold",
  },
});
