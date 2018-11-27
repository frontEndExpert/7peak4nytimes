import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import actionTypes from './actions/actionTypes';
import nytReducer from './reducers/nytReducer';
import rootReducer from './reducers';

const exampleInitialState = {
    nytReducer: {
        allArticles: [],
        currentUrl: 'defaultUrl',
        currentArticle: {},
        searchObj: { 
            page: 1,
            sort: 'newest',
            q: ''
        }
    }
};


export function initializeStore (initialState = exampleInitialState) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
