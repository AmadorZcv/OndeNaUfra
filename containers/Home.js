import React, {Component} from 'react';
import {Alert} from 'react-native';
import {MapView} from 'expo';
//import {database} from '../config/firebase';
import {listenLugares} from '../config/database';
export default class Home extends Component {
  //Iniciar os estados necessarios para funcionar
  constructor (props) {
    super (props);

    this.state = {
      region: {
        latitude: 0.0000,
        longitude: 0.0000,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [],
    };
  }
  //Em caso de sucesso no fetch da position
  positionSucess (position) {
    const regionNova = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    //Criamos um objeto região novo e salvamos no estado
    this.setState ({region: regionNova});
  }
  positionError (error) {
    const regionNova = {
      latitude: -1.454827,
      longitude: -48.445922,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    //Em caso de erro criamos uma região nova focada no predio central
    this.setState ({region: regionNova});
    //Log para debug,retirar em modo de produção
    //console.log ('Erro foi ', error);
    //Erro para o usuario
    Alert.alert ('Erro', 'Não foi possivel achar sua posição');
  }
  getLugares (snapshot) {
    const valor = snapshot.val ();
    const oldMarkers = this.state.markers;
    const marker = {
      coordinate: {
        latitude: valor.latitude,
        longitude: valor.longitude,
      },
    };
    oldMarkers.push (marker);
    this.setState ({markers: oldMarkers});
  }
  //Quando o componente montar
  componentDidMount () {
    //Pegamos a posição
    this.getPosition ();
    //Criamos um listener que executa função sempre que adicionamos uma nova posição
    //Devido ao funcionamento do firebase só precisamos chamar isso para carregar os pontos iniciais tambem
    listenLugares (snapshot => this.getLugares (snapshot));
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
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 10000}
    );
  }
  //Função que carrega os marcadores no mapa
  renderMarkers () {
    const markers = [];
    let count = 0;
    this.state.markers.forEach (element => {
      const marker = (
        <MapView.Marker key={count} coordinate={element.coordinate} />
      );
      count++;
      markers.push (marker);
    });
    return markers;
  }
  render () {
    return (
      <MapView
        style={{flex: 1}}
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
        {this.renderMarkers()}
      </MapView>
    );
  }
}
