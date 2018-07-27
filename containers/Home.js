import React, { Component } from 'react';
import { View, Text,Alert,TouchableOpacity,Dimensions,StyleSheet } from 'react-native';
import {MapView} from 'expo';
export default class Home extends Component {
  constructor (props) {
    super (props);

    this.state = {
      region: {
        latitude: 0.0000,
        longitude: 0.0000,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  positionSucess (position) {
    const regionNova = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    console.log ('Aqui position ', position);
    this.setState ({region: regionNova});
  }
  positionError (error) {
    const regionNova = {
      latitude:-1.454827,
      longitude: -48.445922,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    this.setState({region:regionNova});
    console.log("Erro foi ",error);
    Alert.alert ('Erro', "Não foi possivel achar sua posição");
  }
  componentDidMount () {
    this.getPosition ();
  }
  getPosition () {
    this.setState ({isFetchingPosition: true});
    navigator.geolocation.getCurrentPosition (
      position => this.positionSucess (position),
      error => this.positionError (error),
      {enableHighAccuracy: false, timeout: 100000, maximumAge: 10000}
    );
  }
  render() {
      return (
        <View style={{flex:1,borderWidth:1,borderColor:"#000"}}>
        <MapView
          style={{flex: 1,borderWidth: 10,borderColor: "#000",}}
          region={this.state.region}
          showsUserLocation={true}
          showsMyLocationButton={true}
          provider="google"
        >
  
          <MapView.Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
          />
        </MapView></View>
      );
  
  }
}