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
          <style jsx global>
          {`
@import url("https://fonts.googleapis.com/css?family=Roboto");
body {
  margin: 0;
  color: #1b1a20;
  font-family: 'Roboto', sans-serif; }
          
`}
</style>
</div>
</Provider>
</Container>
);
};
};

export default withReduxStore(MyApp);
