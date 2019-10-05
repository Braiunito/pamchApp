import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from 'react-native';

import Stats from "./Stats"

export default class Searcher extends Component {
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.match}>{this.props.match}</Text>
          <TextInput placeholder="🔎" style={styles.bar} value={this.props.text} onChangeText={this.props.search}/>
          <TouchableOpacity onPress={()=>this.props.state.setState({text:"", match:0, finded:[], trig:false})}>
              <Text style={styles.btn}>X</Text>
          </TouchableOpacity>
      </View>
    )}
}


const styles = StyleSheet.create({
  container: {
    flex: 0.35,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    backgroundColor: "#3c7fe8",
    padding:10,
    paddingBottom:15
  },
  match:{
    marginTop:13,
    color:"white",
    fontWeight:"bold",
    fontSize:18
  },
  btn:{
    color:"#ebebeb",
    fontWeight:"bold",
    backgroundColor:"#eb5454",
    borderRadius:20,
    borderColor:"gray",
    borderRadius:400,
    width:38,
    height:38,
    paddingTop:9,
    paddingLeft:14,
    marginRight:5,
    marginTop:5
  },
  bar:{
    flex:0.9,
    padding: 7,
    paddingLeft:10,
    marginLeft:15,
    //borderColor: 'gray',
    height: 40,
    //width: 350,
    borderBottomWidth:1,
    borderBottomColor:"#333333",
    //backgroundColor:"black",
    marginRight:10,
    color:"white"
  }
});
