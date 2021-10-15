import React from 'react';
import { Range } from '../../components/Range';
import styles from '../../styles/global.scss';

const Exercise1 = () => (
  <div style={{ padding: 20 }}>
    <h1 className={styles.page__title}>Price Range: free range</h1>
    <Range min={5} max={100} minHandlerValue={20} />
  </div>
);

export default Exercise1;
