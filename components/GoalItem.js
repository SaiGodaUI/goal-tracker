import React from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
// { text, onDeleteItem ,id }
const GoalItem = ({ text, onDeleteItem, id }) => {
  const deleteHanDler = () => {
    onDeleteItem(id);
  };
  return (
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={deleteHanDler}
      style={({ pressed }) => pressed && styles.pressedItems}
    >
      <View style={styles.goalItems}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
    justifyContent: "flex-start",
    padding: 8,
  },
  pressedItems: {
    opacity: 0.5,
  },
});
export default GoalItem;
