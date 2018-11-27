import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    allArticles: [],
    currentUrl: '',
    currentArticle: {},
    searchObj: { 
        page: 1,
        sort: 'newest',
        q: ''
    },
    showDetail: false
};

const fetchAllArticles = ( state, action ) => {
    return updateObject( state, { allArticles: action.allArticles } );
};

const setUrl = ( state, action ) => {
    return updateObject( state, { currentUrl: action.currentUrl } );
};

const modifySearch = ( state, action ) => {
    return updateObject( state, { searchObj: action.searchObj } );
};

const setCurrentArticle = ( state, action ) => {
    return updateObject( state, { currentArticle: action.currentArticle } );
};

const openDisplay = ( state, action ) => {
    return updateObject( state, { showDetail: action.showDetail } );
};

const closeDisplay = ( state, action ) => {
    return updateObject( state, { showDetail: action.showDetail } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ALL_ARTICLES: return fetchAllArticles( state, action );
        case actionTypes.SET_URL: return setUrl( state, action );
        case actionTypes.MODIFY_SEARCH: return modifySearch( state, action );
        case actionTypes.SET_CURRENT_ARTICLE: return setCurrentArticle( state, action );
        case actionTypes.OPEN_DISPLAY: return openDisplay( state, action );
        case actionTypes.CLOSE_DISPLAY: return closeDisplay( state, action );

        default: return state;
    }
};

export default reducer;