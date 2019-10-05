import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  TextInput,
} from 'react-native-paper';

export default class Card2 extends Component {

  state={
    transition:[]
  }


  render(){
    if (this.props.trig) {
      return(
        this.props.data.map(data =>
        <Card key={data.ID}>
        <Divider />
        <Divider />
            <Card.Title title={data.Rubro} subtitle={data.Precio}
            left={(props) => <Avatar.Icon {...props} icon="camera"/>}/>
            <Card.Content>
                  <Paragraph>{data.Descripcion}</Paragraph>
            </Card.Content>
            <Card.Actions>
                      <Text>Cantidad:</Text>
                      <TextInput key={data.ID} keyboardType="number-pad" style={{borderColor: 'gray', height: 40, width:50 ,
                      borderWidth:1, marginRight:10}} onChangeText={a => this.props.update(a, data)}/>
            </Card.Actions>


            <Text>SubTotal: ${data.sub} </Text>

            <Card.Actions>
                  <Button onPress={()=>{this.props.del(data)}}>Del</Button>
            </Card.Actions>
        <Divider />
        <Divider />
      </Card>

      ))
    }
    if (this.props.match < 31){
      return(this.props.data.map(data =>
        <Card key={data.ID}>
        <Divider />
        <Divider />
            <Card.Title title={data.Rubro} subtitle={data.Precio}
            left={(props) => <Avatar.Icon {...props} icon="folder"/>}/>
            <Card.Content>
              <Paragraph>{data.Descripcion}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button onPress={ () => { this.props.onPress({data})}}>Add</Button>
              <Button>Modify</Button>
            </Card.Actions>
        <Divider />
        <Divider />
      </Card>

      ))
    } else {
      return false
    }
};
};
