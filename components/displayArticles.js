import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router'
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../store/actions/index';
import Spinner from './spinner/spinner';
import axios from '../shared/axios';
import Moment from 'moment';

class DisplayArticles extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            sort: this.props.sort,
            q: this.props.searchObj.q
        }
    }

    componentDidMount() {
        // AJAX CALL  
        console.log('DidMount ', this.state.page ,this.state.sort,this.state.q);
        this.props.onFetchAllArticles(this.state.page,this.state.sort,this.props.searchObj.q); 
    }

    
    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate1 ',prevProps.q);
        console.log('DidUpdate1 ', this.state.page ,this.state.sort,this.state.q);
       
        if (prevState.page !== this.state.page) {
            console.log('didupadate 1 page', this.state.page);
          this.setState({page: this.state.page});
          this.props.onFetchAllArticles(
              this.state.page,
              this.state.sort,
              this.state.q
              );
        }
        if (prevState.sort !== this.state.sort) {
            console.log('didupadate 1 page', this.state.sort);
          this.setState({sort: this.state.sort});
          this.props.onFetchAllArticles(
              this.state.page,
              this.state.sort,
              this.state.q
              );
        }
        
        if (prevState.q !== this.state.q) {
            console.log('didupdate 2 prevState', prevState.q);
            console.log('didupdate 2 this.state.q', this.state.q);
          this.setState({sort: this.state.q});
          this.props.onFetchAllArticles(
              this.state.page,
              this.state.sort,
              this.state.q
              );
        }
        console.log('DidUpdate3 ', this.state.page ,this.state.sort,this.state.q);
       
      }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('nextProps', nextProps,prevState)
        if(nextProps.page!==prevState.page){
          return { page: nextProps.page};
       }else if(nextProps.sort!==prevState.sort){
        console.log('nextProps.sort=',nextProps.sort);
          return { sort: nextProps.sort};
       }else if(nextProps.q!==prevState.q){
        return { q: nextProps.q};
     }
       else return null;
     }
     

     
     DisplayDetailPage(id) {
       let currentArticle = this.props.allArticles.filter(
            article => article._id === id )[0];
            console.log('currentArticle=', currentArticle);   
        this.props.onSetCurrentArticle({...currentArticle});
        this.props.openDisplay();
        //Router.push({ pathname: '/articleShow' });
    }

      render(){

        let articles = <Spinner />;
        // console.log('allArticles=', this.props.allArticles);
        articles = this.props.allArticles.map( article => (
            <div key={article._id} id="headlineButton" className="headline-btn"
            onClick={() => this.DisplayDetailPage(article._id)} >
                <span className="headline">{article.headline.main}</span>
                <span className="article-date">{Moment(article.pub_date).format('DD/MM/YYYY') }</span>
            </div>
        ));

        return (
            <>
            {articles}
            <style jsx global >{`
            .articles{
                display: flex;
                width: 100%;
                flex-direction: row; //column;
                flex-wrap: wrap;
            }


            #headlineButton{
                width: 95%;
                
                margin: 5px;
                padding: 5px 10px;
                background-color: #DDDDDD;
                cursor: pointer;
                border: 1px solid black;
                border-radius: 10px;
            }
            .headline-btn{
                background-color: #FFFF00;
            }
            .headline-btn:hover{
                background-color: #999999;
            }

            
            #headlineButton > span.headline,
            #headlineButton > span.article-date{
                font-size: 14px!important;
                font-weight: bold;
                background-color: #DDDDDD;
                color: black;
                font-family: Times roman;
            }
            #headlineButton > span.article-date{
                float: right;
            }

            `}</style>
        </>
        )
    }

}


const mapStateToProps = state => {
    return {
        allArticles: state.nytReducer.allArticles,
        currentArticle: state.nytReducer.currentArticle,
        searchObj: state.nytReducer.searchObj,
        showDetail: state.nytReducer.showDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAllArticles: (p,s,q) =>  dispatch( actions.fetchAllArticles(p,s,q) ),
        onSetCurrentArticle: (article) => dispatch (actions.setCurrentArticle(article) ),
        openDisplay: () =>  dispatch( actions.openDisplay() ),
        closeDisplay: () =>  dispatch( actions.closeDisplay() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( DisplayArticles, axios ) );
