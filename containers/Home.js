import React, {Component} from 'react';
import { View } from "react-native";
import {MapView} from 'expo';
import {listenLugares} from '../config/database';
import {connect} from 'react-redux';
import {addPredio} from '../redux/actions';

class Home extends Component {
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
    valor.key = snapshot.key;
    this.props.dispatch (addPredio (valor));
  }
  //Quando o componente montar
  componentDidMount () {
    //Criamos um listener que executa função sempre que adicionamos uma nova posição
    //Devido ao funcionamento do firebase só precisamos chamar isso para carregar os pontos iniciais tambem
    listenLugares (snapshot => this.getLugares (snapshot));
  }
  //Função que carrega os marcadores no mapa
  renderMarkers () {
    const markers = [];
    this.props.predios.forEach (element => {
      const marker = (
        <MapView.Marker
          key={element.key}
          coordinate={{
            latitude: element.latitude,
            longitude: element.longitude,
          }}
        />
      );
      markers.push (marker);
    });
    return markers;
  }
  render () {
    return (
        <MapView
          style={{flex: 1, marginTop: this.state.marginTop}}
          region={this.state.initialRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onMapReady={() => this.setState ({marginTop: 0})}
        >
          {this.renderMarkers ()}
        </MapView>
    );
  }
}
const mapStateToProps = state => {
  const {predios} = state.prediosReducer;
  return {
    predios,
  };
};
export default connect (mapStateToProps) (Home);
