import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class BMI extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text>top</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text>bottom</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default BMI
