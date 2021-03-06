import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/home.module.css';

import {data} from '../services/portifolio';
import HeroHeader from './components/HeroHeader';
import NavButtons from './components/NavButtons';
import Posts from './components/Posts';
import Contacts from './components/Contacts';
import Loading from './components/Loading/Loading';

const Home: NextPage = () => {
  const [apiData, setApiData] = useState({
    owner: '',
    version: '',
    disciplines: [
      {
        title: '',
        // icon: '',
        posts: [
          {
            title:'',
            imgUrl: '',
            link: ''
          }
        ]
      }
    ]
  })

  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    setApiData(data)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeroHeader/>
        <Contacts/>
        {
          apiData ?(
            <>
              <NavButtons apiData={apiData} handleIndexState={setIndex} index={index}/>
              <Posts index={index} apiData={apiData}/>
            </>
            
            ):(
            <Loading/>
          )
        }
    
      </main>
    </div>
  )
}
export const getStaticProps = (context: string) => {
  // console.log('env mensage', process.env.UNSPLASH_API_KEY)
  return {
    props:{ }
}

}

export default Home