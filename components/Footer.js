import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Stats extends Component {
  onProgress = () =>{
    alert("Esta función esta en desarrollo...")
  }
  render(){
    return(
      <View style={styles.container}>
          <TouchableOpacity onPress={this.onProgress}>
              <Icon name="menu" color="white" size={35}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onProgress}>
              <Icon name="people" color="white" size={35}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onProgress}>
              <Icon name="camera" color="white" size={35}/>
          </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:25,
    alignItems:"center",
    backgroundColor: "#3c7fe8",
  },
});
