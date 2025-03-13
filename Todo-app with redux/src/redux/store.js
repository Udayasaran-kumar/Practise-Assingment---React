import { createStore } from 'redux';
import { reducer } from './reducer';

export const todostore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);
