import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// Todos os middlewares vão juntos
const middleWare = [];
// Adicionando o Redux Thunk
middleWare.push (ReduxThunk);

export default function makeStore () {
  let store;
  if (__DEV__) {
    store = createStore (
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__ (),
      applyMiddleware (...middleWare)
    );
  } else {
    store = createStore (wrappedReducer, applyMiddleware (...middleWare));
  }
  //const store = createStoreWithMiddleware(wrappedReducer);
  return store;
}