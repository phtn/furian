import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Brain from '../../img/brain.png'
export default props => (
  <View style={styles.container}>
  <TouchableOpacity
    style={styles.touch}
    onPress={press}>
    <View style={styles.button}>
      <Image source={Brain} style={styles.img}/>
    </View>
  </TouchableOpacity>
  </View>
)
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
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    color: '#333'
  },
  img: {
    height: 20,
    width: 20,
    alignItems: 'center'
  }
})
const press = () => {
  console.log('fire')
}
