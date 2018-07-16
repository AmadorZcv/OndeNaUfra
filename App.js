import React from 'react';
import { Alert } from "react-native";
import { MapView } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      region: {
        latitude: 0.0000,
        longitude: 0.0000,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  };
  positionSucess(position) {
    const regionNova = {
      latitude: position.coords.latitude, 
      longitude: position.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    console.log("Aqui position ",position);
    this.setState({ region:regionNova});
  }
  positionError(error) {
    Alert.alert("Erro",error);

  }
  componentDidMount() {
    this.getPosition()
  }
  getPosition() {
    this.setState({ isFetchingPosition: true });
    navigator.geolocation.getCurrentPosition(
      position => this.positionSucess(position),
      error => this.positionError(error),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 10000 }
    );

  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={this.state.region}
        /*initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}*/
      />
    );

  }


}