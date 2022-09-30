import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import DrawerScreen from './src/Screen/DrawerScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';


// import GoalItem from './components/GoalItem';
// import GoalInput from './components/GoalInput';
// import ToDoApp from './src/Screen/ToDo';
// import CustomButton from './components/CustomButton';
// import { NavigationContainer } from '@react-navigation/native';
// import DrawerScreen from './src/Screen/DrawerScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import DrawerScreen from './src/Screen/DrawerScreen';


export default function App() {
  const [toDoApp, setToDoApp] = useState(false);





  return (
    <NavigationContainer>
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <DrawerScreen />
     
      </View>
    </NavigationContainer>






    // <View style={styles.containerapp}>
    //   {!toDoApp && <CustomButton
    //     onPressHandler={() => {
    //       // Alert.alert("hy")
    //       setToDoApp(true)
    //     }}
    //     btnTitle={'Open Module'}
    //   />

    //   }


    //   {toDoApp && <ToDoApp />

    //   }
    // </View>
  );
};

const styles = StyleSheet.create({

  containerapp: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

    backgroundColor: 'white'
  },

  goalscontainer: {
    flex: 5,
  },

});

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }