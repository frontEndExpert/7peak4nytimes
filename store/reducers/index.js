import { combineReducers } from 'redux';
import nytReducer from './nytReducer';


export default combineReducers({
  nytReducer: nytReducer
});