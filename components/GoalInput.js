import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter Your Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btn}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              style={styles.cancelBtn}
              onPress={props.onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              style={styles.addBtn}
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "orange",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 60,
    width: "100%",
    flex: 1,
  },
  textInput: {
    width: "80%",
    height: 40,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  btn: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  cancelBtn: {
    color: "red",
  },
  addBtn: {},
});

export default GoalInput;
