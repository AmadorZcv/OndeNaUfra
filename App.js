import React from 'react';
import {View} from 'react-native';
import Tabs from './config/routes';
export default class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1, paddingTop: Expo.Constants.statusBarHeight}}>
        <Tabs />
      </View>
    );
  }
}
