import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
const press = () => {
  console.log('status')
}
export default props => (
  <TouchableOpacity
    onPress={press}
    style={styles.container}>
  <View>
    <Text style={styles.text}>{props.name}</Text>
  </View>
  </TouchableOpacity>
)
const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#eee',
    borderLeftColor: '#999',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#999',
    borderRightWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444'
  }
})
