import React, { Component } from 'react';
import { connect } from 'react-redux';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../store/actions/index';
import Spinner from './spinner/spinner';
import axios from '../shared/axios';
import Moment from 'moment';


class NytArticles extends Component {
    constructor(props) {
        super(props);
        // this.changeFilter = this.changeFilter.bind(this);
    }
    state = {

    }

    componentDidMount() {
        // AJAX CALL
        this.props.onFetchAllArticles();
    }
  

render(){

    let articles = <Spinner />;
    console.log('allArticles=', this.props.allArticles);
    articles = this.props.allArticles.map( article => (
        <div>
            <h1>{article.headline.main}</h1>
            {Moment(article.pub_date).format('DD/MM/YYYY') }
        </div>
    ));

    return (
        <div>
            {articles}
        </div>
    )
}

}


const mapStateToProps = state => {
    return {
        allArticles: state.nytReducer.allArticles,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAllArticles: () =>  dispatch( actions.fetchAllArticles() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( NytArticles, axios ) );