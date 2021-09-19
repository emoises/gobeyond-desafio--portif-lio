import React from 'react';
import Image from 'next/image'
import styles from '../../../styles/HeroHeader.module.css'
import heroImg from '../../../../public/images/profile.jpg'
const HeroHeader: React.FC = () => {
  
  return (
    <section className={styles.section}>
        <div className={styles.banner}></div>
        <div className={styles.imgContainer}>
        <Image className={styles.heroImg} src={heroImg} alt="Vercel Logo" width={100} height={100}  />
        </div>
        <h1 className={styles.heroName}>Eduardo Moisés da Silva</h1>
        <h2 className={styles.heroFunction}>Front-end Developer</h2>
    </section>
    )
}

export default HeroHeader;