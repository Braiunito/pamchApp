import React, { Component } from 'react';
import {StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements'

export default class Stats extends Component {
  render(){
    return(
      <View style={styles.container}>
              <View style={styles.stats}>
                  <Text style={{color:"white", fontWeight:"bold"}}>Total: ${this.props.total}</Text>
              </View>
              <View style={styles.tag}>
                    <Text style={styles.h2}>WhatItCosts</Text>
              </View>
              <TouchableOpacity style={styles.cart}>
                  <Icon name="layers" color="white" size={29}/>
                  <Text onPress={ this.props.calculate } style={styles.btn}>{this.props.items}</Text>
              </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    paddingHorizontal:15,
    paddingTop:10
  },
  stats:{
    flex:0.5,
    backgroundColor:"#3c7fe8",
    borderRadius: 5,
    justifyContent:"center",
    alignItems:"flex-start",

    paddingLeft:10,
    paddingTop:5,
    paddingBottom:5,
  },
  tag:{
    flex:1,
    marginHorizontal:5,
    height:40,
    borderRadius:20,
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center"
  },
  cart:{
    flex:0.5,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#3c7fe8",
    borderRadius:10
  },
  btn:{
    height: 40,
    fontSize:20,
    color:"white",
    fontWeight: "bold",
    marginTop:10
  },
  h2:{
      color:"white",
      fontSize:20,
  }
});
