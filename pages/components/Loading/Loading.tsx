import React from 'react';
import styles from '../../../styles/loading.module.css'
const Loading: React.FC = () => {
  return (
    <div className={styles.ldsCircle }>
        <div></div>
    </div>
    );
}

export default Loading;