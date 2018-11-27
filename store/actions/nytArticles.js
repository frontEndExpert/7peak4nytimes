import * as actionTypes from './actionTypes';
import axios from '../../shared/axios';
import Router from 'next/router';



export const fetchAllArticles = (p,s,q) => 
async dispatch => {
   // console.log('action sort',s);
    // axios.defaults.headers.post['Content-Type']  = 'application/json;charset=utf-8';
    // axios.defaults.headers.post['crossDomain'] = true;
    //searchObj.q
    let aParams = {};
    if(q.length>0){
         aParams = {
            'api-key':'e7007bb0c5e54f50b808a71a1494f2a8',
            'page': p,
            'sort': s,
            'q': q
        }
    }else{
        aParams = {
            'api-key':'e7007bb0c5e54f50b808a71a1494f2a8',
            'page': p,
            'sort': s
        }
    }
    console.log('aParams',aParams);
    await axios.get('/articlesearch.json', {
        headers: { 'content-type': 'application-x-www-form-urlencoded'},
        dataType: 'jsonp',
        params: { ...aParams }
    })
       .then(res => {
        //console.log('res.config',res.config);
            //console.log('res.data.response.docs',res.data.response.docs);
            const fetchedArticles = res.data.response.docs;
            return dispatch({
                type: actionTypes.FETCH_ALL_ARTICLES,
                allArticles: fetchedArticles
                });
       })
       .catch(err => {
           console.log('Error=',err);
           throw new Error('Could not fetch. Try again later.');
       })
}


export const setUrl = (url) => {
    console.log("set url=", url);
     return  {
        type: actionTypes.SET_URL,
        currentUrl: url 
    };
};

export const modifySearch = (page,sort,q) => {

     return  {
        type: actionTypes.MODIFY_SEARCH,
        searchObj: { 
            page: page,
            sort: sort,
            q: q
        }
    };

};

export const setCurrentArticle = (article) => {
    console.log("action set article=", article);
     return {
        type: actionTypes.SET_CURRENT_ARTICLE,
        currentArticle: article
    };
};