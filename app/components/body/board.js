import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Left from '../../img/left.png'
export default props => (
  <View style={styles.container}>
    <View style={styles.board}>

    <TouchableOpacity
      style={styles.backView}
      onPress={() => props.navigator.push({id: 'list'})}>
      <Image
        source={Left}
        style={styles.backImg} />
    </TouchableOpacity>

      <View style={styles.titleView}>
        <Text style={styles.titleText}>{props.name}</Text>
      </View>
      <View style={styles.backView}></View>

    </View>
    <View style={styles.contentView}>
      {props.content}
    </View>
  </View>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(2, 82, 104)',
    padding: 10,
  },
  text: {
    color: '#84754e'
  },
  board: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0,
    borderColor: '#84754e',
    height: '100%',
    borderRadius: 1,
    padding: 5,
  },
  titleView: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30
  },
  titleText: {
    fontSize: 24,
    color: '#eee'
  },
  backView: {
    flex: 1,
    borderWidth: 0,
    borderColor: '#84754e',
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  contentView: {
    flex: 11,
    borderWidth: 1,
    borderColor: '#eee'
  },
  backImg: {
    height: 20,
    width: 20,
    alignItems: 'center',
  }
})
