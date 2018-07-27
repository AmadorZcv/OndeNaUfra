import React, { Component } from 'react';
import { View, Text,Alert,TouchableOpacity,Dimensions,StyleSheet } from 'react-native';
import {MapView} from 'expo';
import {database} from '../config/firebase';
import { listenLugares } from '../config/database';
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
      markers:[]
    };
  }
  positionSucess (position) {
    const regionNova = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
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
  getLugares(snapshot){
  const valor = snapshot.val();
  const oldMarkers = this.state.markers;
  const marker = {
    coordinate:{
    latitude:valor.latitude,
    longitude:valor.longitude}
  }
  oldMarkers.push(marker);
  this.setState({markers:oldMarkers});
  }
  componentDidMount () {
    this.getPosition ();
    listenLugares((snapshot)=> this.getLugares(snapshot))
  }
  addLocalListener (localSnap) {
    const trueMarkers = [];
    this.state.markers.forEach (localMark => trueMarkers.push (localMark));
    const {local} = localSnap.val ();
    trueMarkers.push ({local: local, key: localSnap.key});
    this.setState ({markers: trueMarkers});
}
  getPosition () {
    this.setState ({isFetchingPosition: true});
    navigator.geolocation.getCurrentPosition (
      position => this.positionSucess (position),
      error => this.positionError (error),
      {enableHighAccuracy: false, timeout: 10, maximumAge: 10000}
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
  {this.state.markers.map (marker => 
  { console.log("Aqui");
   return(
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
            />
)})}
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