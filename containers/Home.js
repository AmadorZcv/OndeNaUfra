import React, {Component} from 'react';
import {Alert} from 'react-native';
import {MapView} from 'expo';
import {listenLugares} from '../config/database';
export default class Home extends Component {
  //Iniciar os estados necessarios para funcionar
  constructor (props) {
    super (props);
    this.state = {
      //Dados da UFRA Portão Principal
      initialRegion: {
        latitude: -1.454827,
        longitude: -48.445922,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [],
      //So para forçar rerender do mapa
      marginTop: 1,
    };
  }
  //Em caso de sucesso no fetch da position
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
    //Criamos um listener que executa função sempre que adicionamos uma nova posição
    //Devido ao funcionamento do firebase só precisamos chamar isso para carregar os pontos iniciais tambem
    listenLugares (snapshot => this.getLugares (snapshot));
    //Forçar Rerender do mapa para fazer o botão de local aparecer
    setTimeout (() => this.setState ({marginTop: 0}), 200);
  }
  addLocalListener (localSnap) {
    const trueMarkers = [];
    this.state.markers.forEach (localMark => trueMarkers.push (localMark));
    const {local} = localSnap.val ();
    trueMarkers.push ({local: local, key: localSnap.key});
    this.setState ({markers: trueMarkers});
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
        style={{flex: 1, marginTop: this.state.marginTop}}
        initialRegion={this.state.initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {this.renderMarkers ()}
      </MapView>
    );
  }
}
