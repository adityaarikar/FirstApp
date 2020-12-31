import React from "react";
import { Modal, StyleSheet, View, Text, Button, FlatList } from "react-native";

const Complete = (props) => {
  return (
    <Modal visible={props.visible}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>COMPLETED</Text>
        </View>
        <View style={styles.display}>
          <FlatList
            keyExtractor={(item, index) => item.id}
            style={styles.displayList}
            data={props.cmptGoal}
            renderItem={(itemData) => (
              <View style={styles.list}>
                <Text style={styles.listData}>{itemData.item.value}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.btn}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              style={styles.cancelBtn}
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  title: {
    marginTop: 30,
    color: "green",
    fontSize: 50,
  },
  display: {
    width: "80%",
  },
  btn: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
  },
  button: {
    width: "40%",
  },
  cancelBtn: {
    color: "red",
  },
  list: {
    backgroundColor: "gray",
    marginVertical: 5,
    padding: 3,
    paddingLeft: 10,
    borderRadius: 5,
  },
  listData: {
    fontSize: 20,
  },
});

export default Complete;
