import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Router from 'next/router'
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../store/actions/index';
// import Spinner from './spinner/spinner';
import axios from '../shared/axios';
//import Moment from 'moment';
import DetailPage from './detailPage'
import DisplayArticles from './displayArticles'

class NytArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            sort: 'newest',
            q: this.props.searchObj.q
        }
    }
    

    articleSearch(event){
        event.preventDefault();
        event.persist();
        this.props.modifySearch( this.state.page, this.state.sort, event.target.value)
       
        this.setState({
            q:  event.target.value
            });
    }

    orderBy(e){
        e.preventDefault();
        e.persist();
        this.setState({
            sort: e.target.value
            });
        }

    
    PrevArticles = () => {
        this.setState({
            page: (this.state.page>1)?this.state.page-1:1
            });
    }
    NextArticles = () => {
        this.setState({
            page: this.state.page+1
            });
    }
 
render(){
    let page = () => {
    if(this.props.showDetail===true){
        return <DetailPage />
    }else{
        return (
        <div className="articles">
            <input type="text" id="searchQuery" name="q" 
            onChange={(e) => this.articleSearch(e)} 
            value={this.state.q} /><br/>
            <div className="radioBtn">
                <input type="radio" name="orderby" className="orderby"
                    onChange={(e) => this.orderBy(e)}
                    checked={this.state.sort === "newest"}
                    value="newest" /> Newest first
                <input type="radio" name="orderby" className="orderby"
                    onChange={(e) => this.orderBy(e)}
                    checked={this.state.sort === "oldest"} 
                    value="oldest" /> Oldest first<br/>
            </div>
            <DisplayArticles 
                page={this.state.page} 
                sort={this.state.sort} 
                q={this.state.q} />

            <button name="prev" onClick={() => this.PrevArticles()} 
            className="nav-btn">Previous 10 Articles</button>
            <span className="page-no">Page <br/>{this.state.page}</span>
            <button name="next" onClick={() => this.NextArticles()} 
            className="nav-btn right">Next 10 articles</button>
            <style jsx global >{`
                .articles{
                    display: flex;
                    width: 100%;
                    padding: 10px;
                    margin: 0px;
                    flex-direction: row; 
                    flex-wrap: wrap;
                    justify-content: center;
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

                @media (max-width: 500px){
                    #headlineButton{
                        margin: 3px;
                        padding: 3px 6px;
                    }

                    #headlineButton > span.headline,
                    #headlineButton > span.article-date{
                        font-size: 12px!important;
                    }
                }

                #headlineButton > span.article-date{
                    float: right;
                }
                .articles > button.right{
                    margin-left:5px;
                }
                #searchQuery{
                    margin: 6px;
                    width: 250px;
                }
                .articles > .radioBtn{
                    margin: 6px;
                    width: 100%;
                    text-align: center;
                }
                .articles > .radioBtn > input.orderby{
                    margin: 3px 10px;
                }
                .page-no{
                    text-align: center;
                    margin-left:5px;
                }

            `}</style>
        </div>
        )

    }
    }
    return (
        page()
    )
}

}


const mapStateToProps = state => {
    return {
        allArticles: state.nytReducer.allArticles,
        currentUrl: state.nytReducer.currentUrl,
        searchObj: state.nytReducer.searchObj,
        showDetail: state.nytReducer.showDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAllArticles: (p) =>  dispatch( actions.fetchAllArticles(p) ),
        modifySearch: (p,s,q) => dispatch (actions.modifySearch(p,s,q) ),
        openDisplay: () =>  dispatch( actions.openDisplay() ),
        closeDisplay: () =>  dispatch( actions.closeDisplay() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( NytArticles, axios ) );