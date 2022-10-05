// import { useState } from 'react';
// import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from "react-native";

// import GoalItem from '../../components/GoalItem';
// import GoalInput from '../../components/GoalInput';

// function ToDoApp(props) {
//     const [courseGoals, setCourseGoals] = useState([]);
//     const [modalVisible, setModalVisible] = useState(false);

//     const [updateGoalRequest, setUpdateGoalRequest] = useState(false);
//     const [updateGoalKey, setUpdateGoalKey] = useState();
//     const [updatGoalText, setUpdateGoalText] = useState();


//     function deleteGoalHandler(id) {
//         setCourseGoals(currentCourseGoals => {
//             return currentCourseGoals.filter((goal) => goal.id !== id);
//         });
//     }

//     function startAddGoalHandler() {
//         setModalVisible(true);
//     }

//     function endAddGoalHandler() {
//         setModalVisible(false);
//     }

//     const goalInputHandler = (userGoal) => {
//         if (updateGoalRequest === true) {
//             let foundIndex = courseGoals.findIndex(element => element.key === updateGoalKey)
//             courseGoals.splice(foundIndex, 1, {
//                 text: userGoal, key: updateGoalKey
//             })
//         }
//         else { setCourseGoals((previousList) => [...previousList, { text: userGoal, key: Math.random().toString() }]); }
//         setModalVisible(false);
//     }
//     const updateGoalHandler = (goalKey) => {
//         setUpdateGoalRequest(true);
//         setModalVisible(true);
//         setUpdateGoalKey(goalKey);
//     }
//     const updateGoalRequestHandler = () => {
//         setUpdateGoalRequest(false);
//         setUpdateGoalKey(null);
//     }
//     return (
//         <View style={styles.containerapp}>
//             <Button title='Add New Goals'
//                 color='#a065ec'
//                 onPress={startAddGoalHandler} />
//             <GoalInput visible={modalVisible}
//                 onAddGoal={goalInputHandler}
//                 onCancel={endAddGoalHandler}
//                 updateGoal={updateGoalRequest} upDateGoalText={updatGoalText}
//                 onUpdatGoalRequest={updateGoalRequestHandler}
//             />




//             <View style={styles.goalscontainer}>

//                 <FlatList data={courseGoals}

//                     renderItem={(itemData) => {
//                         return (

//                             <GoalItem
//                                 // key={`${inde}`}
//                                 text={itemData.item.text}
//                                 id={itemData.item.id}
//                                 onDeleteItem={deleteGoalHandler}
//                                 onUpdateGoal={updateGoalHandler}
//                             />

//                         );
//                     }}

//                     keyExtractor={(item, index) => 'key' + index}

//                     alwaysBounceVertical={false}

//                 />


//             </View>

//         </View>
//     );
// };
// export default ToDoApp;


// const styles = StyleSheet.create({

//     containerapp: {
//         flex: 1,
//         paddingTop: 50,
//         paddingHorizontal: 16,
//         backgroundColor: '#1e085a'
//     },

//     goalscontainer: {
//         flex: 5,
//     },

// });





