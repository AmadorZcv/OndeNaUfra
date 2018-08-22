import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { lightPrimaryColor } from '../config/styles';



export default class VendaItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.titulo} >{this.props.nome}</Text>
        <Text>{this.props.descricao}</Text>
        <Text>{this.props.local}</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    container: {
      padding: 5,
      backgroundColor: lightPrimaryColor,


    },
    titulo: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
    },

  }
)

