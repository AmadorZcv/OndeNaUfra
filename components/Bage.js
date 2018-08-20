import React, { PureComponent } from 'react';
import { accentColor } from '../config/styles';
import {MapView} from 'expo';
import {Icon} from '../node_modules/react-native-elements';
export default class Bage  extends PureComponent {


  render() {
    return (
        <MapView.Marker
        id={this.props.id}
        coordinate={{
          latitude: this.props.latitude,
          longitude: this.props.longitude,
        }}
      >
        <Icon name={'bus'} type={'font-awesome'} color={accentColor} size={18}/>
      </MapView.Marker>
    );
  }
}
