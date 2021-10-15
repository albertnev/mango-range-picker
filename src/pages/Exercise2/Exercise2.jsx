import React from 'react';
import { Range } from '../../components/Range';
import styles from '../../styles/global.scss';

const Exercise1 = () => (
  <div style={{ padding: 20 }}>
    <h1 className={styles.page__title}>Price Range: fixed values</h1>
    <Range min={5} max={100} rangeValues={[25, 50, 75, 80, 100]} />
  </div>
);

export default Exercise1;
