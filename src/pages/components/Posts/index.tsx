import React from 'react';
import styles from '../../../styles/posts.module.css'
import Link from 'next/link'
interface PostsProps{
    apiData: DataProps ;
    index: number;
}
const Posts: React.FC<PostsProps> = ({apiData,index}) => {
  return (
      <section className={styles.section}>
          {
              apiData.disciplines[index].posts.map( (post, idx) => {
                  return(
                      
                      <div key={idx} className={styles.container}>
                        <a 
                        className={styles.link}  
                        href={post.link}
                        style={{
                            backgroundImage: `url(${post.imgUrl})`
                        }}  >
                            <h3 className={styles.h3}>{post.title}</h3>
                        </a>
                      </div>
                      

                  )
              })
          }
      </section>
  );
}

export default Posts;