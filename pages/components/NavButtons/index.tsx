import React, { Dispatch, SetStateAction } from 'react';

import styles from '../../../styles/navBar.module.css'
interface NavBarProps{
  apiData: DataProps ;
  handleIndexState: Dispatch<SetStateAction<number>>;
  index: number
}
const NavButtons: React.FC<NavBarProps> = ({apiData,handleIndexState,index}) => {

 

  return (
    <nav className={styles.nav}>
      {
        apiData?.disciplines.map( (disciple, idx) => {
          return (
          
              <button  
              key={idx} 
              className={index === idx ? styles.buttonActive :styles.button}
              onClick={() => handleIndexState(idx)}
              >
                  <p>{disciple.title}</p>
              </button>
            )
                
          })
      }
    </nav>
  )
}

export default NavButtons;