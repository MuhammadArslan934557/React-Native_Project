import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';


function GoalItem(props) {
    const updateGoalHandler=()=>{
        props.onUpdateGoal(props.id);
    }
    return (

        <View style={styles.goalItem}>
           
            
            <Text style={styles.goalText}>{props.text}</Text>
            <View style={styles.DeleteTextcontainer}>

                <Text style={styles.DeleteText} onPress={props.onDeleteItem.bind(this, props.id)}>Delete</Text>
            </View>
            <View style={styles.DeleteTextcontainer}>
                <Text style={styles.DeleteText} onPress={updateGoalHandler}>Update</Text>
            </View>

        </View>

    );
};
export default GoalItem;

const styles = StyleSheet.create({

    goalItem: {
        margin: 8,
        flexDirection: 'row',
        borderRadius: 6,
        backgroundColor: '#5e0acc',

    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        width: "60%",
        color: 'white',
        padding: 8,
        
    },
    DeleteText: {
        color: "white",
        padding:6,
        

    },
    DeleteTextcontainer: {
        backgroundColor: "grey",
        margin: 5,
        borderRadius:10
    }
});

