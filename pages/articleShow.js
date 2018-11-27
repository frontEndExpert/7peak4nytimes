import Link from 'next/link'
import Head from '../components/head';

import DetailPage from '../components/detailPage';


export default () => (
  <div>
    <Head title="Article Detail Page" description="New York Times Article Detail Page" />
    <div className="nytimes">
    <h1 className="title">Welcome to New York Times Article search</h1>
      <DetailPage  />
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
