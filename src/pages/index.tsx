import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroHeader from './components/HeroHeader'
import NavButtons from './components/NavButtons'
import {data} from '../data/data'
import { useState } from 'react'

const Home: NextPage = () => {
  const [apiData, setApiData] = useState(data)

  console.log(apiData)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeroHeader/>
        <NavButtons apiData={apiData}/>
      </main>
    </div>
  )
}

export default Home
