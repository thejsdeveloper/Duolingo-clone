import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export const Button = ({ text, onPress }) => {
  return (
    <Pressable style={styles.container} {...{ onPress }}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58cc02",
    height: 50,
    marginVertical: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    borderColor: "white",
    borderBottomWidth: 1.5,
  },
});
