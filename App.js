import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard, TextInput, TouchableOpacity, Image } from "react-native";
import { Header } from "./components/Header";
import { Item } from "./components/Item";

export default function App() {
  const [todos, SetTodos] = useState([
    {
      id: 1,
      text: "uhlash",
    },
    {
      id: 2,
      text: "coding",
    },
    {
      id: 3,
      text: "futbool",
    },
    {
      id: 4,
      text: "basketbool",
    }
  ])
  const inputRef = useRef()
  const [value , SetValue] = useState("");
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>

      <View style={styles.container}>
        <Header/>

        <View style={styles.content}>
        <View style={styles.form}>
      <TextInput ref={inputRef} style={styles.input} placeholder='Add Todo' onChangeText={(val) => SetValue(val)}/>
      <TouchableOpacity style={styles.button} onPress={() => {
        SetTodos([
          ...todos,
          {
            id: todos.length + 1,
            text: value,
          },
        ])
      }}>
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
    {console.log(inputRef?.current.value)}
          <View style={styles.list}>
            {todos.map(item => (
              <View style={styles.item}>
                <Text style={styles.id}>{item.id}</Text>    
                <Text style={styles.text}>{item.text}</Text>   
                <Image /> 
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    item: {
      padding: 10,
      borderRadius: 5,
      flexDirection: "row",
      borderWidth: 2,
      borderColor: "purple",
    },
    id: {
    },
    text: {
      marginRight: "auto",
      marginLeft: "auto",
      textTransform: "upperCase"
      // textAlign: "center",
    },
    content : {
      flex: 1,
      padding: 20,
      // backgroundColor: "cyan"
    },
    list: {
      marginTop: 40,
      gap: 20
    },
    form : {
      flexDirection: "row",
      gap: 15,
      width: "100%",  
    },
    input: {
      flex: 1,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "purple",
      padding: 10,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      padding: 10,
      color: "purple",
      borderWidth: 2,
      borderColor: "purple"
    }
  });
  