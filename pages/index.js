import Link from 'next/link';
import Head from '../components/head';

import NytArticles from '../components/nyt-articles'

export default () => (
  <div>
    <Head title="Home" description="The article search result list" />
    <div className="nytimes">
      <h1 className="title">Welcome to New York Times Article search</h1>
      <NytArticles/>
    </div>
      

    <style jsx>{`
      
      .title {
        margin: 0;
        width: 100%;
        padding-top: 20px;
        line-height: 1.15;
        font-size: 36px;
      }
      .title, .description {
        text-align: center;
      }
     
    `}</style>
  </div>
)
