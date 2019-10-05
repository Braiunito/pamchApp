import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, TextInput,
Button, SafeAreaView, ScrollView, Alert, ImageBackground,
KeyboardAvoidingView, StatusBar   } from 'react-native';
import Constants from 'expo-constants';

import { Icon } from 'react-native-elements'


import Card from "./components/Card";
import Header from "./components/Header";
import Searcher from "./components/Searcher";
import Footer from "./components/Footer";
import db from './csvjson.json';

export default class App extends Component {
  state = {
    text:"",
    data: db,
    tot:0,

    finded: [],
    match:0,

    cart:[],
    cartL:0,

    trig:false,
  };


  search = (msj) =>{
      this.setState({text:msj})
      const results = this.state.data.filter(i => {return (i.Descripcion.toLowerCase().includes(this.state.text.toLowerCase()))})
      this.setState({
        finded: results,
        match:  results.length
      })
    }

  update = (c, p) =>{
    console.log("cantidad homie: ",p.cant);
    let total = 0
    var a = p.Precio.replace(".", "")
    a = parseInt(a.split("$ ")[1])
    const b = (c!="")?(a * parseInt(c)):(0)
    const t = []

    this.state.cart.map(a=>{
      if (a.ID === p.ID) {
        a = { ...a, sub:b, cant:c}
      }
    total += a.sub
    t.push(a)
    })

    this.setState({tot:total})
    this.setState({cart: t})
  }


  del = (o) =>{
    const t = this.state.cart.filter(a=>{
      if(a.ID === o.ID){
        const update = (this.state.tot - a.sub)
        this.setState({tot:update})
        return false
      }
        return true
    })
    this.setState({cart: t, cartL:t.length})
  }


  onPress = (j) =>{
    var a = true
    const trigger = this.state.cart.map(cart=>{if (cart.ID === j.data.ID){a=false}})
    if (a) {
      var addStates = j.data
      Object.defineProperty(addStates, "sub", { value: 1, enumerable: true });
      Object.defineProperty(addStates, "cant", { value: 0, enumerable: true });
      this.state.cart.push(addStates)
      this.setState({
        cartL:this.state.cart.length
    })}
  }


  toggle = () =>{
    this.setState({trig:!this.state.trig})
  }

  render(){
  return (

<ImageBackground style={styles.container} source={require("./assets/work-hard.jpg")} style={styles.container}>

        <View style={styles.header}>
                <Searcher match={this.state.match} text={this.state.text} search={this.search} state={this}/>
                <Header total={this.state.tot} items={this.state.cartL} toggle={this.toggle} screen={this.state.trig} />
        </View>

        <View style={styles.body}>
                <KeyboardAvoidingView style={styles.results}>
                        <SafeAreaView style={styles.containerSafe}>
                                <ScrollView style={styles.scrollView}>
                                        <Card data={(!(this.state.trig))?this.state.finded:this.state.cart}
                                        update={this.update}
                                        match={this.state.match} onPress={this.onPress}
                                        trig={this.state.trig} del={this.del}/>
                                </ScrollView>
                        </SafeAreaView>
                </KeyboardAvoidingView>
        </View>
        <View style={styles.footer}>
                <Footer/>
        </View>

<StatusBar backgroundColor="blue" barStyle="light-content" hidden={true}/>
</ImageBackground>
  );
};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  body:{
    flex:1,
    flexDirection: "column",
  },
  header:{
    flex:0.30,
    flexDirection: "column",
  },
  results:{
    flex:1,
    //backgroundColor: "green"
  },
  containerSafe: {
    marginTop: Constants.statusBarHeight,
    marginBottom: 25,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  footer:{
    flex:0.12
  }
});
