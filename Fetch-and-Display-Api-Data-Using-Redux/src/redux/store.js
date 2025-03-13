import {applyMiddleware,createStore} from 'redux'
import { reducer } from "./reducer";
import {thunk} from 'redux-thunk';

export const todoreducer= createStore(reducer,applyMiddleware(thunk));