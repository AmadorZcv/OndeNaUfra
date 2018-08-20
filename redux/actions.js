import {ADD_PONTO_VENDA, ATIVAR_VENDAS, DESATIVAR_VENDAS, ADD_PREDIO, ADD_BAGE} from './types';
//Vendas
export const addPontoVenda = ponto => ({
  type: ADD_PONTO_VENDA,
  payload: ponto,
});
export const ativarVendas = () => ({
  type: ATIVAR_VENDAS,
});
export const desativarVendas = () => ({
  type: DESATIVAR_VENDAS,
});

export const addPredio = (predio) => ({
  type: ADD_PREDIO,
  payload: predio
})

export const addBage = (bage) => ({
  type: ADD_BAGE,
  payload: bage
})
