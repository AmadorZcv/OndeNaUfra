import React from 'react';
import {YellowBox} from 'react-native';
import _ from 'lodash';
import {View} from 'react-native';
import Tabs from './config/routes';
import {Provider} from 'react-redux';
import createStore from './redux/createStore';

YellowBox.ignoreWarnings (['Setting a timer']);
const _console = _.clone (console);
console.warn = message => {
  if (message.indexOf ('Setting a timer') <= -1) {
    _console.warn (message);
  }
};
export default class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      store: null,
    };
  }
  componentWillMount () {
    const store = createStore ();
    this.setState ({store: store});
  }
  render () {
    return (
      <Provider store={this.state.store}>
        <View style={{flex: 1, paddingTop: Expo.Constants.statusBarHeight}}>
          <Tabs />
        </View>
      </Provider>
    );
  }
}
