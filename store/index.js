import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import actionTypes from './actions/actionTypes';
import nytReducer from './reducers/nytReducer';
import rootReducer from './reducers';

const exampleInitialState = {
    nytReducer: {
        allArticles: []
    }
};


export function initializeStore (initialState = exampleInitialState) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
