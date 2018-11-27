
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { string } from 'prop-types';
import Auxiliry from '../hoc/Auxiliry/Auxiliry';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../store/actions/index';
import axios from '../shared/axios';


class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentArticle: this.props.currentArticle  
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate1 currentArticle ', this.state.currentArticle);
       
        if (prevState.currentArticle !== this.state.currentArticle) {
            //console.log('didupadate 1 page', this.state.currentArticle);
          this.setState({currentArticle: this.state.currentArticle});
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        //console.log('nextProps', nextProps,prevState)
        if(nextProps.currentArticle!==prevState.currentArticle){
          return { currentArticle: nextProps.currentArticle};
       }
       else return null;
     }

     handleClick(event){
        // event.preventDefault();
        // event.persist();
        // const href = "/";
        // const as = href;
        // Router.push(href, as, { shallow: true });
        // Router.back( { shallow: true });
        this.props.closeDisplay();
     }


    render(){
        console.log('DP this.props.currentArticle.multimedia=', this.props.currentArticle.multimedia); 
        let images = '';
        if(this.props.currentArticle.multimedia.length>1){
            let srclink='https://www.nytimes.com/' + this.props.currentArticle.multimedia[0].url;
            images = <img src={srclink} className="img-responsive multi-image" />
        }else{
            images = <span>No Images</span>
        }
        

        return  (
                <div className="detail-page">
                    <div id="backButton" key={'goBack'} className="back-button"  
                            onClick={(event) => this.handleClick(event)  }>
                            <span>Back</span>
                    </div>
                    <p>{this.props.currentArticle.headline.main}</p>
                    <p>{this.props.currentArticle.snippet}</p>
                    <div className="multimedia">
                        {images}
                    </div>
                      <p className="remark">(Click to view this article on the New York Times Web site. You might need a subscription)</p>
                      <p><a href={this.props.currentArticle.web_url} target="_new">{this.props.currentArticle.web_url}</a></p>

                    <style jsx global>{`
                    .detail-page{
                        width: 100%;
                        margin: 0px;
                        padding: 10px;

                    }
                        .back-button{
                                width: 90px;
                                height: 40px;
                                border-radius: 10px;
                                border: 1px solid black;
                                background-color: #cccccc;
                                text-align: center;
                                cursor: pointer;
                                padding: 7px;
                        }
                        .back-button:hover, .back-button:focus{
                            background-color: #eeeeee;
                        }
                        .multimedia{
                            display: flex;
                            width: 80%;
                            justify-content: flex-start;
                            flex-wrap: wrap;
                        }
                        .multimedia > .multi-image{
                            width: 600px;
                            height: auto;
                            margin: 5px;
                        }
                        .remark{
                            font-size: 10px;
                        }
                     `}</style>
                </div>
            )
    }

}

  
const mapStateToProps = state => {
    return {
        allArticles: state.nytReducer.allArticles,
        currentUrl: state.nytReducer.currentUrl,
        currentArticle: state.nytReducer.currentArticle,
        showDetail: state.nytReducer.showDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAllArticles: () =>  dispatch( actions.fetchAllArticles() ),
        openDisplay: () =>  dispatch( actions.openDisplay() ),
        closeDisplay: () =>  dispatch( actions.closeDisplay() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( DetailPage, axios ) );