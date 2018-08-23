import React from "react";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";
import Home from "../containers/Home";
import Me from "../containers/Me";
import { darkPrimaryColor, accentColor } from "./styles";
import MarketPlace from "../containers/MarketPlace";
import AdicionarVendas from "../containers/AdicionarVendas";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import Router from "../containers/Router";

const VendasStack = createStackNavigator({
  MarketPlace: {
    screen: MarketPlace,
    navigationOptions: () => ({
      header: null
    })
  },
  AdicionarVendas: {
    screen: AdicionarVendas,
    navigationOptions: () => ({
      header: null
    })
  }
});
export const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    })
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      header: null
    })
  }
});
export const MeStack = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: () => ({
      header: null
    })
  }
});
export default createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Mapa",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="google-maps"
            size={25}
            type="material-community"
            color={tintColor}
          />
        )
      }
    },
    MarketPlace: {
      screen: VendasStack,
      navigationOptions: {
        tabBarLabel: "Vendas",
        tabBarIcon: ({ tintColor }) => {
          return (
            <Icon
              name="shopping-basket"
              size={22}
              type="font-awesome"
              color={tintColor}
            />
          );
        }
      }
    },
    Me: {
      screen: Router,
      navigationOptions: {
        tabBarLabel: "Eu",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="user-circle"
            size={22}
            type="font-awesome"
            color={tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: darkPrimaryColor
      },
      showIcon: true,
      activeTintColor: accentColor
    }
  }
);
