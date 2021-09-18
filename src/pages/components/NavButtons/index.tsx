import React, { useEffect, useState } from 'react';

import styles from '../../../styles/NavBar.module.css'
interface NavBarProps{
  apiData: DataProps ;
}
const NavButtons: React.FC<NavBarProps> = ({apiData}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    console.log(index)
  }, [index])

  return (
    <nav className={styles.nav}>
      {
        apiData.disciplines.map( (disciple, idx) => {
          return (
            <button 
            key={idx} 
            className={index === idx ? styles.buttonActive :styles.button}
            onClick={() => setIndex(idx)}
            >{disciple.title}</button>
            )
        })
      }
    </nav>
  )
}

export default NavButtons;