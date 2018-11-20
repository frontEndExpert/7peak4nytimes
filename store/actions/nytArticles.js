import * as actionTypes from './actionTypes';
import axios from '../../shared/axios';
import Router from 'next/router';



export const fetchAllArticles = () => 
dispatch => {
    axios.get('/articlesearch.json', {
        params: {
            'api-key':'e7007bb0c5e54f50b808a71a1494f2a8'
        }
    })
       .then(res => {
            console.log('res.data.response.docs',res.data.response.docs);
            const fetchedArticles = res.data.response.docs;
            return dispatch({
                type: actionTypes.FETCH_ALL_ARTICLES,
                allArticles: fetchedArticles
                });
       })
       .catch(err => {
           dispatch(fetchProductsFail(err));
           console.log(err);
           throw new Error('Could not fetch. Try again later.');
       });
}