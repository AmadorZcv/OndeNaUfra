import {
  ATIVAR_BAGE,
  DESATIVAR_BAGE,
  ADD_PARADA_BAGE,
  SET_IS_SENTIDO_PREDIO,
  SET_IS_ZOOTEC,
  ADD_BAGE,
} from './types';
import update from 'immutability-helper';

const initialState = {
  bages: [],
  ativado: true,
  paradas: [],
  zootec: false,
  sentidoPrincipal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BAGE:
      const newBage = action.payload;
      return update (state, {bages: {$push: [newBage]}});
    case ADD_PARADA_BAGE:
      const newParada = action.payload;
      return update (state, {paradas: {$push: [newParada]}});
    case ATIVAR_BAGE:
      return {...state, ativado: true};
    case DESATIVAR_BAGE:
      return {...state, ativado: false};
    case SET_IS_SENTIDO_PREDIO:
      return {...state, sentidoPrincipal: payload};
    case SET_IS_ZOOTEC:
      return {...state, zootec: payload};
    default:
      return state;
  }
};
