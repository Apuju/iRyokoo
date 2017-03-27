import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const finalCreateStore = applyMiddleware(thunk)(createStore);

export default function configureStore(reducer) {
  return finalCreateStore(reducer);
};