import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import Home from '../containers/Home';
import Me from '../containers/Me';
import {Constants} from 'expo';
import { darkPrimaryColor, accentColor } from './styles';
import MarketPlace from '../containers/MarketPlace';
export default createMaterialTopTabNavigator (
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Mapa',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="google-maps"
            size={25}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    MarketPlace: {
      screen: MarketPlace,
      navigationOptions: {
        tabBarLabel: 'Vendas',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="shopping-basket"
            size={22}
            type="font-awesome"
            color={tintColor}
            containerStyle={{justifyContent:"center",margin:0,padding:0}}
          />
        ),
      },
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Eu',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="user-circle"
            size={22}
            type="font-awesome"
            color={tintColor}
            containerStyle={{justifyContent:"center",margin:0,padding:0}}
          />
        ),
      },
    }
  },{
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: darkPrimaryColor,
      },
      showIcon:true,
      indicatorStyle :{
        backgroundColor:"#fff"
      },
      activeTintColor:accentColor
    }
   }
);
