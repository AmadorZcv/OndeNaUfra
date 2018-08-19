
import update from 'immutability-helper';
import { ADD_PREDIO, ATIVAR_PREDIOS, DESATIVAR_PREDIOS } from './types';
const initialState = {
  predios: [],
  ativado: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PREDIO:
      const newPredio = action.payload;
      return update (state, {predios: {$push: [newPredio]}});
    case ATIVAR_PREDIOS:
      return {...state, ativado: true};
    case DESATIVAR_PREDIOS:
      return {...state, ativado: false};
    default:
      return state;
  }
};