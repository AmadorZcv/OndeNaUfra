import {
  ADD_PONTO_VENDA,
  ATIVAR_VENDAS,
  DESATIVAR_VENDAS,
  ADD_PREDIO,
  ADD_BAGE,
  LOGIN,
  LOG_OUT,
  CHANGE_USER
} from "./types";
//Vendas
export const addPontoVenda = ponto => ({
  type: ADD_PONTO_VENDA,
  payload: ponto
});
export const ativarVendas = () => ({
  type: ATIVAR_VENDAS
});
export const desativarVendas = () => ({
  type: DESATIVAR_VENDAS
});
//Predios
export const addPredio = predio => ({
  type: ADD_PREDIO,
  payload: predio
});
//Bage
export const addBage = bage => ({
  type: ADD_BAGE,
  payload: bage
});
//Usuario
export const login = () => ({
  type: LOGIN
});
export const log_out = () => ({
  type: LOG_OUT
});
export const changeUser = user => ({
  type: CHANGE_USER,
  payload: user
});
