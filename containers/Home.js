import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,borderWidth:1,borderColor:"#000"}}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
