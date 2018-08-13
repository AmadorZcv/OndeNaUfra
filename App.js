import React from 'react';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import {View} from 'react-native';
import Tabs from './config/routes';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
export default class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1, paddingTop: Expo.Constants.statusBarHeight}}>
        <Tabs />
      </View>
    );
  }
}
