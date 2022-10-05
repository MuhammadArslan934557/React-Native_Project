import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from "react-native";
// import GoalInput from './components/GoalInput';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


interface courseGoalsState {
  text: string;
  key: string;
}

export interface GoalInputProps {
  visible: boolean;
  onAddGoal: (userGoal: string) => void;
  onCancel: () => void;
  updateGoal: boolean;
  upDateGoalText ?: string;
  onUpdatGoalRequest: () => void;
}

export interface GoalItemProps {
  text: string;
  id: string;
  onDeleteItem: (id: string) => void;
  onUpdateGoal: (goalKey: string)=>void;
}

function ToDoApp() {
  const [courseGoals, setCourseGoals] = useState<courseGoalsState[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [updateGoalRequest, setUpdateGoalRequest] = useState<boolean>(false);
  const [updateGoalKey, setUpdateGoalKey] = useState<string>();
  const [updatGoalText, setUpdateGoalText] = useState<string>();


  function deleteGoalHandler(id: string) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  }

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  const goalInputHandler = (userGoal: string) => {
    if (updateGoalRequest === true) {
      let foundIndex = courseGoals.findIndex(element => element.key === updateGoalKey)
      if (updateGoalKey) {
        courseGoals.splice(foundIndex, 1, {

          text: userGoal, key: updateGoalKey
        })
      }
    }
    else { setCourseGoals((previousList) => [...previousList, { text: userGoal, key: Math.random().toString() }]); }
    setModalVisible(false);
  }
  const updateGoalHandler = (goalKey: string) => {
    setUpdateGoalRequest(true);
    setModalVisible(true);
    setUpdateGoalKey(goalKey);
  }
  const updateGoalRequestHandler = () => {
    setUpdateGoalRequest(false);
    setUpdateGoalKey('');
  }
  return (
    <View style={styles.containerapp}>
      <Button title='Add New Goals'
        color='#a065ec'
        onPress={startAddGoalHandler} />

      <GoalInput
        visible={modalVisible}
        onAddGoal={goalInputHandler}
        onCancel={endAddGoalHandler}
        updateGoal={updateGoalRequest}
        upDateGoalText={updatGoalText}
        onUpdatGoalRequest={updateGoalRequestHandler}
      />




      <View style={styles.goalscontainer}>

        <FlatList data={courseGoals}

          renderItem={(itemData) => {
            return (

              <GoalItem
                // key={`${inde}`}
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteGoalHandler}
                onUpdateGoal={updateGoalHandler}
              />

            );
          }}

          keyExtractor={(item, index) => 'key' + index}

          alwaysBounceVertical={false}

        />


      </View>

    </View>
  );
};
export default ToDoApp;


const styles = StyleSheet.create({

  containerapp: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },

  goalscontainer: {
    flex: 5,
  },

});













