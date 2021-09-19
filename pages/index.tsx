import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroHeader from './components/HeroHeader'
import NavButtons from './components/NavButtons'
// import {data} from '../data/data'
import { useEffect, useState } from 'react'
import Posts from './components/Posts'
import Contacts from './components/Contacts'

const data = {
  owner: "Eduardo Moisés da Silva",
  version: "1.0",
  disciplines: [
    {
      title: "🤖 Alexa skill",
      // icon: alexa,
      posts: [
        {
          title: "📚 Documentação",
          imgUrl: "https://images.unsplash.com/photo-1568910748155-01ca989dbdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          link: "https://developer.amazon.com/en-US/docs/alexa/ask-overviews/what-is-the-alexa-skills-kit.html",
        },
        {
          title: "Tutorial",
          imgUrl: "https://images.unsplash.com/photo-1615834593791-aa31b118afe0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://images.unsplash.com/photo-1603684560609-57feb6c6e3df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://images.unsplash.com/photo-1545488897-424e53f3ad92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://images.unsplash.com/photo-1572460041714-49f1f551ad38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://images.unsplash.com/photo-1512446733611-9099a758e5e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          link: "",
        },
      ],
    },
    {
      title: "⚛️ React",
      // icon: react,
      posts: [
        {
          title: "Tutorial",
          imgUrl: "https://media.istockphoto.com/photos/atomic-particle-3d-illustration-picture-id1264562094?b=1&k=20&m=1264562094&s=170667a&w=0&h=2zEjCnXdh9xOLoA4bctM6_LSGtiiveNEw-AvW0PUy1g=",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://media.istockphoto.com/photos/atomic-nucleus-picture-id473233278?b=1&k=20&m=473233278&s=170667a&w=0&h=cmpJMF-CTybyKHXsmRk3Pq3IgEnl0Ty4VV9RNCObbPM=",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://media.istockphoto.com/photos/model-of-atom-and-elementary-particles-physics-concept-3d-rendered-picture-id1270632735?b=1&k=20&m=1270632735&s=170667a&w=0&h=YDEOCKL6c6Zd1acR9CIIRwYqchE1LtGoO4xa3AowKn4=",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://cdn.pixabay.com/photo/2016/02/25/17/33/atom-1222516_960_720.jpg",
          link: "",
        }
      ],
    },
    {
      title: "⌚ Fitbit",
      // icon: fitbit,
      posts: [
        {
          title: "📚 Documentação",
          imgUrl: "https://images.unsplash.com/photo-1510017803434-a899398421b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "https://images.unsplash.com/photo-1557045136-50ed3874553c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
      ],
    },
    {
      title: "🌎 HTML Puro",
      // icon: html5,
      posts: [
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
        {
          title: "Tutorial",
          imgUrl: "",
          link: "",
        },
      ],
    },
  ],
};


const Home: NextPage = () => {
  const [apiData, setApiData] = useState(data)

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
        <NavButtons apiData={apiData} handleIndexState={setIndex} index={index}/>
        <Posts index={index} apiData={apiData}/>
    
      </main>
    </div>
  )
}
export const getStaticProps = (context: string) => {
  console.log('env mensage', process.env.UNSPLASH_API_KEY)
  return {
    props:{ }
}

}

export default Home