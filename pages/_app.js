import App, {Container} from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {
  render () {
     const {Component, pageProps, reduxStore} = this.props; 
    return (
      <Container>
        <Provider store={reduxStore}>
          <div className="App">
            <Component {...pageProps} />
          </div>
        </Provider>
      </Container>
    );
  };
};

export default withReduxStore(MyApp);
