import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from '../reducers';

const defaultState = {};

export function initializeStore(initialState = defaultState) {
  return createStore(
    createRootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(thunk, createLogger()))
  );
}
