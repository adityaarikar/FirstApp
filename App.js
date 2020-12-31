import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Complete from "./components/Complete";

export default function App() {
  const [courseGoals, setCourseGaols] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCompleteMode, setIsCompleteMode] = useState(false);
  const [completedGoal, setCompletedGoal] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGaols((courseGoals) => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGaols((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const cancelGoalCompleteHandler = () => {
    setIsCompleteMode(false);
  };

  const completeGoalHandler = (goalValue) => {
    setCompletedGoal([
      ...completedGoal,
      { id: Math.random().toString(), value: goalValue },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.select}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      </View>
      <View style={styles.completeBtn}>
        <Button title="Completed" onPress={() => setIsCompleteMode(true)} />
      </View>
      <Complete
        visible={isCompleteMode}
        onCancel={cancelGoalCompleteHandler}
        cmptGoal={completedGoal}
      />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        style={styles.displayList}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            onComplete={completeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  displayList: {
    marginTop: "10%",
    width: "90%",
    backgroundColor: "pink",
    padding: "5%",
    borderRadius: 20,
  },
  completeBtn: {
    marginTop: 30,
    width: "50%",
  },
  select: {
    marginTop: 20,
    width: "50%",
  },
});
