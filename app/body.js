import React, { Component } from 'react'
import { View, Text, StyleSheet, SectionList, TouchableHighlight } from 'react-native'
import data from './data.js'
import _ from 'lodash'
export default class ListBody extends Component {
  constructor(props){
    super(props)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.setName = this.setName.bind(this)
    this.state = { name: this.props.name }
  }
  setName(name){
    this.props.name
  }
  renderHeader(header){
  return <View style={styles.headerUnderlay}>
    <TouchableHighlight
      underlayColor={`#84754e`}
      style={styles.header}
      onPress={(e)=> {
          setTimeout(t=> {
            this.props.navigator.push({
              id: 'details',
              name: header.section.key,
            })
          }, 100)
        }
      }>
      <View>
        <Text style={styles.headerText}>{header.section.key}</Text>
      </View>
    </TouchableHighlight>
    </View>
  }
  renderItem(item){
  return <View style={styles.textUnderlay}>
    <TouchableHighlight
      underlayColor={`#84754e`}
      style={styles.text}
      onPress={()=> console.log(item.item.id)}>
      <View style={styles.textView}>
        <Text>{item.item.desc}</Text>
        <Text>{item.item.pubAt}</Text>
      </View>
    </TouchableHighlight>
    </View>
  }
  render(){
    return(
      <View style={styles.container}>
        <SectionList
          renderItem={ this.renderItem }
          renderSectionHeader={ this.renderHeader }
          sections={ dataSource }
          keyExtractor={item => item.id}
          onRefresh={()=> null }
          refreshing={ false }
          //SectionSeparatorComponent={ separator }
        />
      </View>
    )
  }
}

let dataSource = [ // homogenous rendering between sections
  {id: '01', name: 'BMI', desc: `What's your weight class?`, subHeader: 'Body Mass Index', pubAt: `${Date.now()}`},
  {id: '02', name: 'mo . js', desc: 'Motion Graphics for the web', subHeader: 'a', pubAt: `${Date.now()}`},
  {id: '03', name: 'Turtle', desc: '458 Italia', subHeader: 'a', pubAt: `${Date.now()}`},
  {id: '04', name: 'Giggyraffes', desc: 'Model S', subHeader: 'a', pubAt: `${Date.now()}`},
  {id: '05', name: 'Crocodillies', desc: '458 Italia', subHeader: 'a', pubAt: `${Date.now()}`},
  {id: '06', name: 'Beans', desc: 'Model S', subHeader: 'a', pubAt: `${Date.now()}`},
  {id: '07', name: 'Hippo', desc: '458 Italia', subHeader: 'a', pubAt: `${Date.now()}`},
  {id: '08', name: 'Tungsten', desc: 'Model S', subHeader: 'a', pubAt: `${Date.now()}`},
  {id: '09', name: 'Quantum', desc: '458 Italia', subHeader: 'a', pubAt: `${Date.now()}`},
  {id: '10', name: 'Dynamo', desc: 'Model S', subHeader: 'a', pubAt: `${Date.now()}`},
]

dataSource = _.groupBy(dataSource, d => d.name)
dataSource = _.reduce(dataSource, (acc, next, index) => {
  acc.push({
    key: index,
    data: next
  })
  console.log(acc)
  return acc
}, [] )

const separator = () => (
  <View style={styles.separator}>
  </View>
)
const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#eee',
  },
  section: {
    backgroundColor: 'blue'
  },
  header: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 20,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderColor: '#999',
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    marginBottom: 0,
    height: 60,

  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(2, 82, 104)',
  },
  text: {
    padding: 10,
    backgroundColor: '#eee',
    borderColor: '#999',
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopWidth: 0,
    margin: 0,
    marginTop: 0,

  },
  separator: {
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10
  },
  textView: {
    height: 100,
    margin: 0,
    padding: 0,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerUnderlay: {
    backgroundColor: '#84754e',
    flex: 1,
    height: 60,
    margin: 10,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    marginBottom: 0,
  },
  textUnderlay: {
    backgroundColor: '#84754e',
    height: 100,
    margin: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    marginTop: 0,
  }
})
