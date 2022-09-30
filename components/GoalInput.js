import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const updateGoalrequest = props.updateGoal;
    const [goal, setGoal] = useState("");
   
    const goalHandler = (enteredText) => {
        setGoal(enteredText);
    }
    const goalListHandler = () => {

        props.userGoalInputData(goal);
        setGoal('');
        props.cancelModal(false);
        props.onUpdatGoalRequest();
    }

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(goal);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputcontainer}>
                <Image style={styles.image} source={require('../../../Project/MyProject/src/Assets/Images/download.png')} />
                {
                    !updateGoalrequest && <TextInput style={styles.textInput}
                        placeholder="Your course goal!"
                        onChangeText={goalHandler}
                        defaultValue={props.upDateGoalText}
               
                    />}

                {
                    updateGoalrequest && <TextInput style={styles.textInput}
                        placeholder="Your course goal!"
                        defaultValue={props.upDateGoalText}
                        onChangeText={goalHandler}
                    />}

                <View style={styles.buttonContainer}>
                    {!updateGoalrequest && <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
                    </View>}
                    {updateGoalrequest && <View style={styles.button}>
                        <Button title="Update Goal" onPress={addGoalHandler} color="#b180f0" />
                    </View>}
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default GoalInput;
const styles = StyleSheet.create({

    inputcontainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },

    textInput: {
        borderWidth: 1,
        color: '#120438',
        width: '95%',
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#e4d0ff",
        borderColor: "#e4d0ff",
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }


});