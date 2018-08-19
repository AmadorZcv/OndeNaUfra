import {combineReducers} from 'redux';
import bageReducer from './bageReducer';
import vendasReducer from './vendasReducer';
import prediosReducer from './prediosReducer';

export default combineReducers ({
  bageReducer,
  vendasReducer,
  prediosReducer,
});
