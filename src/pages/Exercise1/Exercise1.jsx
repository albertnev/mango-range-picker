import React from 'react';
import { Range } from '../../components/Range';
import {
  serviceUrl,
  loadingMessage,
  fetchErrorMessage,
} from '../../shared/constants';
import useFetchData from '../../hooks/useFetchData';
import styles from '../../styles/global.scss';

const Exercise1 = () => {
  const {
    data = {},
    isLoading,
    hasError,
  } = useFetchData(`${serviceUrl}/min-max`);

  return (
    <div style={{ padding: 20 }}>
      {hasError && <div>{fetchErrorMessage}</div>}
      {isLoading ? (
        <div>{loadingMessage}</div>
      ) : (
        <>
          <h1 className={styles.page__title}>Price Range: free range</h1>
          <Range min={data.min} max={data.max} minHandlerValue={20} />
        </>
      )}
    </div>
  );
};
export default Exercise1;
