import React from 'react';
import { Range } from '../../components/Range';
import { serviceUrl } from '../../shared/constants';
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
      {hasError && (
        <div>
          There has been an error while trying to fetch the server. Please,
          refresh the page.
        </div>
      )}
      {isLoading ? (
        <div>Loading...</div>
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
