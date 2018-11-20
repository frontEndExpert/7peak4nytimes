import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    allArticles: [],
};

const fetchAllArticles = ( state, action ) => {
    return updateObject( state, { allArticles: action.allArticles } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ALL_ARTICLES: return fetchAllArticles( state, action );

        
        default: return state;
    }
};

export default reducer;