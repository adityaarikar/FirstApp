import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.list}>
      <Text style={styles.listData}>{props.title}</Text>
      <View style={styles.btn}>
        <TouchableOpacity>
          <Text
            style={styles.doneBtn}
            onPress={props.onComplete.bind(this, props.title)}
          >
            ✅
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.deleteBtn}
            onPress={props.onDelete.bind(this, props.id)}
          >
            x
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "gray",
    marginVertical: 5,
    padding: 3,
    paddingLeft: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listData: {
    fontSize: 20,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  doneBtn: {
    fontSize: 25,
    marginRight: 5,
  },
  deleteBtn: {
    fontSize: 30,
    marginRight: 10,
    color: "red",
  },
});

export default GoalItem;
