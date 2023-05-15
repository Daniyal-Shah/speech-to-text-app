import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const MainScreenIcon = () => {
  return (
    <Image
      style={styles.mainScreenIcon}
      resizeMode="cover"
      source={require("../assets/listen.png")}
    />
  );
};

const styles = StyleSheet.create({
  mainScreenIcon: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MainScreenIcon;
