import React from 'react'
import { Text } from 'react-native';
import { View ,StyleSheet} from 'react-native'

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TODO APP</Text>
    </View>
  )
}
const styles = StyleSheet.create({

  header: {
    width: "100%",
    backgroundColor: "purple",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  }
});
