import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity, Alert, ImageBackground } from "react-native";
import CustomButton from '../../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient'

function StartGameScreen() {
    const[enteredNumber,setEnterNumber] = useState('');
    
    function numberInputHandler(enteredText){
        setEnterNumber(enteredText);
    }

    function resetinputHandler(){
        setEnterNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
        Alert.alert('Invalid Number!',
        'number has to be a number between 1 and 99',
        [{text:'okay',style:'destructive',onPress:resetinputHandler}]);
        return;
        }
        console.log('valid number')
    }
    return (

        <View style={styles.backgroundColor}>
            
                <LinearGradient colors={['#72063c', 'grey', '#ddb52f']}
                    style={styles.linearGradient}>
                        <ImageBackground source={require('../../Assets/Images/Dices.jpg')}
            resizeMode="cover"
            style={styles.ScreenImage}
            imageStyle={styles.backgroundimage}
            >
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.numberInput}
                            maxLength={2}
                            keyboardType="number-pad"
                            onChangeText={numberInputHandler}
                            value={enteredNumber}                        />
                        <View style={styles.buttonRows}>
                            <CustomButton btnTitle={'Reset'} onPress={resetinputHandler}></CustomButton>
                            <CustomButton btnTitle={'Confirm'}onPress={confirmInputHandler}></CustomButton>
                        </View>
                    </View>
                    </ImageBackground>
                </LinearGradient>
           
        </View>

    );
}

export default StartGameScreen;
const styles = StyleSheet.create({
    backgroundColor: {
        flex: 1,

    },
    inputContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 24,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6, shadowOpacity: 0.25
    },
    numberInput: {
        height: 70,
        width: 60,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',


    },
    buttonRows: {
        flexDirection: 'row'
    },
    linearGradient: {
        flex: 1,


    },
    ScreenImage:{
        flex:1,
    },
    backgroundimage:{
        opacity:0.2,
    }
});