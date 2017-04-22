import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default props => (
  <View style={styles.container}></View>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    borderTopWidth: 5,
    borderTopColor: '#84754e'
  }
})
