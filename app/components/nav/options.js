import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
export default props => (
  <View style={styles.container}>
  <TouchableHighlight
    underlayColor={'#6a737b'}
    style={styles.touch}
    onPress={press}>
    <View style={styles.button}>

    </View>
  </TouchableHighlight>
  </View>
)
const press = () => {
  console.log('options')
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    backgroundColor: '#eee',
    padding: 0,
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 1,
    borderColor: '#999',
    borderWidth: StyleSheet.hairlineWidth,
    width: 40,
    height: 40
  },
})
