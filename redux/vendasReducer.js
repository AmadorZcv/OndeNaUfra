import {ADD_PONTO_VENDA, ATIVAR_VENDAS, DESATIVAR_VENDAS} from './types';
import update from 'immutability-helper';
const initialState = {
  pontos: [],
  ativado: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PONTO_VENDA:
      const newPonto = action.payload;
      return update (state, {pontos: {$push: [newPonto]}});
    case ATIVAR_VENDAS:
      return {...state, ativado: true};
    case DESATIVAR_VENDAS:
      return {...state, ativado: false};
    default:
      return state;
  }
};
