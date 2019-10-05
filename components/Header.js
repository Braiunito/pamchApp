import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import Stats from "./Stats"

export default class Header extends Component {
  render(){
    return(
      <View style={{flex:1}}>
          <Stats total={this.props.total} items={this.props.items} calculate={this.props.calculate}/>
      </View>
    )}
}
