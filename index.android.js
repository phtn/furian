import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Navigator } from 'react-native';
import NAV from './app/nav'
import BODY from './app/body'
import FOOTER from './app/footer'
import BOARD from './app/components/body/board'
import BMI from './app/components/body/bmi'
class furian extends Component {
  constructor(props){
    super(props)
    this.getName = this.getName.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.state = { name: '< / snip >', route: {}}
  }
  press(){
    console.log('pressed')
  }
  getName(name){
    console.log(name)
  }
  onUpdate(state){
    this.setState({route: state})
  }
  scene( route, navigator ){

    switch( route.id ){
      case 'list':
        return <BODY title='list' navigator={navigator}/>
      case 'details':
        return <BOARD
          press={this.press}
          title='details'
          name={route.name}
          content={<BMI />}
          navigator={navigator}
        />
    }

  }
  render() {
    console.log(this.state.route)
    return (
      <View style={styles.container}>

        <NAV name={this.state.name} />

        <Navigator
          initialRoute={{ id: 'list' }}
          renderScene={ this.scene }
          configureScene={( route, routeStack ) => Navigator.SceneConfigs.FloatFromRight }
          style={styles.nine}
        />

        <FOOTER />

      </View>
    );
  }
}
export default furian
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(2, 82, 104)',
  },
  nine: {
    flex: 9
  }
});
AppRegistry.registerComponent('furian', () => furian);
