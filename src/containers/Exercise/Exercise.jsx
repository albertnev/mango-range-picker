import React from 'react';
import PropTypes from 'prop-types';
import { loadingMessage, fetchErrorMessage } from '../../shared/constants';
import useFetchData from '../../hooks/useFetchData';
import styles from '../../styles/global.scss';

const Exercise = ({ title, fetchUrl, component: Component }) => {
  const { data = {}, isLoading, hasError } = useFetchData(fetchUrl);

  return (
    <div style={{ padding: 20 }}>
      {hasError && <div>{fetchErrorMessage}</div>}
      {isLoading ? (
        <div>{loadingMessage}</div>
      ) : (
        <>
          <h1 className={styles.page__title}>{title}</h1>
          <Component data={data} />
        </>
      )}
    </div>
  );
};

Exercise.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  fetchUrl: PropTypes.string.isRequired,
};

export default Exercise;
