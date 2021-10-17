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
    data: { rangeValues = [] } = {},
    isLoading,
    hasError,
  } = useFetchData(`${serviceUrl}/range-values`);

  return (
    <div style={{ padding: 20 }}>
      {hasError && <div>{fetchErrorMessage}</div>}
      {isLoading ? (
        <div>{loadingMessage}</div>
      ) : (
        <>
          <h1 className={styles.page__title}>Price Range: fixed values</h1>
          <Range
            min={rangeValues[0]}
            max={rangeValues[rangeValues.length - 1]}
            rangeValues={rangeValues}
          />
        </>
      )}
    </div>
  );
};

export default Exercise1;
