import React, {Component} from 'react';
import {View} from 'react-native';
import {MapView} from 'expo';
import {listenLugares, listenBage} from '../config/database';
import {connect} from 'react-redux';
import {addPredio, addBage} from '../redux/actions';
import {Icon} from '../node_modules/react-native-elements';
import {primaryColor} from '../config/styles';
import Bage from '../components/Bage';

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
  getBage (snapshot) {
    const valor = snapshot.val ();
    valor.key = snapshot.key;
    this.props.dispatch (addBage (valor));
  }
  //Quando o componente montar
  componentDidMount () {
    //Criamos um listener que executa função sempre que adicionamos uma nova posição
    //Devido ao funcionamento do firebase só precisamos chamar isso para carregar os pontos iniciais tambem
    listenLugares (snapshot => this.getLugares (snapshot));
    listenBage (snapshot => this.getBage (snapshot));
  }
  //Função que carrega os marcadores no mapa
  renderMarkers () {
    if (this.props.prediosAtivados) {
      const markers = [];
      this.props.predios.forEach (element => {
        const marker = (
          <MapView.Marker
            key={element.key}
            coordinate={{
              latitude: element.latitude,
              longitude: element.longitude,
            }}
          >
            <Icon
              name={'building'}
              type={'font-awesome'}
              color={primaryColor}
              size={18}
            />
          </MapView.Marker>
        );
        markers.push (marker);
      });
      return markers;
    }
    return null;
  }
  renderBages () {
    if (this.props.bagesAtivados) {
      const markers = [];
      this.props.bages.forEach (element => {
        const marker = (
          <Bage
            key={element.key}
            id={element.key}
            latitude={element.latitude}
            longitude={element.longitude}
          />
        );
        markers.push (marker);
      });
      return markers;
    }
    return null;
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
        {this.renderBages ()}
      </MapView>
    );
  }
}
const mapStateToProps = state => {
  const {predios} = state.prediosReducer;
  const prediosAtivados = state.prediosReducer.ativado;
  const {bages} = state.bageReducer;
  const bagesAtivados = state.bageReducer.ativado;
  return {
    predios,
    bages,
    prediosAtivados,
    bagesAtivados,
  };
};
export default connect (mapStateToProps) (Home);
