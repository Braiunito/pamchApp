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
            <Card.Title title={data.Precio} subtitle={data.Rubro}
            left={(props) => <Avatar.Icon {...props} icon="camera"/>}/>
            <Card.Content>
                  <Paragraph>{data.Descripcion}</Paragraph>
            </Card.Content>

            <TextInput  mode="outlined" key={data.ID}
                        placeholder="Cantidad"
                        keyboardType="number-pad"
                        style={{width:90, height:50, marginLeft:17}}
                        value={this.props.data.cant}
                        onChangeText={a => this.props.update(a, data)}>
            </TextInput>

            <Card.Title title={`Sub: $${data.sub}`} />

            <Card.Actions>
                  <Button mode="contained" color="red" onPress={()=>{this.props.del(data)}}>Del</Button>
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
            <Card.Title title={data.Precio} subtitle={data.Rubro}
            left={(props) => <Avatar.Icon {...props} icon="folder"/>}/>
            <Card.Content>
              <Paragraph>{data.Descripcion}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button mode="contained" color="#3c7fe8" onPress={ () => { this.props.onPress({data})}}>Add</Button>
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
