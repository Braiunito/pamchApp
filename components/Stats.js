import React, { Component } from 'react';
import {StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements'

export default class Stats extends Component {
  render(){
    const screen = (this.props.screen)?"Calculate":"Search"
    return(
      <View style={styles.container}>
              <View style={[styles.cart, {justifyContent:"flex-start", paddingLeft:7}]}>
                  <Icon name="account-balance-wallet" color="white" size={29}/>
                  <Text style={styles.btn}>${this.props.total}</Text>
              </View>
              <View style={styles.tag}>
                    <Text style={styles.h2}>{screen}</Text>
              </View>
              <TouchableOpacity onPress={ ()=> { this.props.toggle() }} style={styles.cart}>
                  <Icon name="layers" color="white" size={29}/>
                  <Text style={styles.btn}>{this.props.items}</Text>
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
  tag:{
    flex:1,
    marginHorizontal:5,
    height:40,
    borderRadius:10,
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
