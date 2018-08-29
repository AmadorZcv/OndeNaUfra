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
        <Text style={styles.tituloNomes} >{this.props.vendaname}</Text>
        <Text>{this.props.descricao}</Text>

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
    tituloNomes: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
    },

  }
)

