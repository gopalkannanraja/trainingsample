import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowList = ({ title }) => {
    return (
        <View style={styles.container} >
          <Text style={{marginLeft:10}}>{title}</Text>
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    marginRight:10,
    marginLeft:10,
    marginBottom:10
  }
});

export default ShowList;