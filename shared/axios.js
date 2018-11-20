import axios from 'axios';
const nytInstance = axios.create({
    baseURL: 'https://api.nytimes.com/svc/search/v2'
});

export default nytInstance;

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//         url += '?' + $.param({
//         'api-key': "e7007bb0c5e54f50b808a71a1494f2a8"
//         });