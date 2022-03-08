import PropTypes from "prop-types";
import { StyleSheet, Text, View, Image } from "react-native";

export const ImageOption = ({ source, text, isSelected }) => {
  return (
    <View
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        source={{ uri: source }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

ImageOption.propTypes = {
  source: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

ImageOption.defaultProps = {
  isSelected: true,
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
  optionText: {},
});
