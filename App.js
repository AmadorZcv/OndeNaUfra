import React from 'react';
import {Alert,View,Platform,Text} from 'react-native';
import {MapView} from 'expo';
import Tabs from './config/routes';
import { Constants } from 'expo';
export default class App extends React.Component {
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
    Alert.alert ('Erro', error);
  }
  componentDidMount () {
    this.getPosition ();
  }
  getPosition () {
    this.setState ({isFetchingPosition: true});
    navigator.geolocation.getCurrentPosition (
      position => this.positionSucess (position),
      error => this.positionError (error),
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 10000}
    );
  }
  render () {
    
    return <View style={{flex:1,paddingTop: Expo.Constants.statusBarHeight}}>
      <Tabs/>
      </View>
    return (
      <MapView
        style={{flex: 1}}
        region={this.state.region}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
      >

        <MapView.Marker
          coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
          }}
        />
      </MapView>
    );
  }
}
