import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BRAND from './components/nav/brand'
import STATUS from './components/nav/status'
import OPTIONS from './components/nav/options'
export default props => (
  <View style={styles.container}>
    <BRAND brand='PHTN458'/>
    <STATUS name={props.name}/>
    <OPTIONS />
  </View>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#6a737b',
    borderColor: '#999',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})
