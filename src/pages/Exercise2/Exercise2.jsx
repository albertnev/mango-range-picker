import React from 'react';
import PropTypes from 'prop-types';
import { Range } from '../../components/Range';
import { serviceUrl } from '../../shared/constants';
import { Exercise } from '../../containers/Exercise';

const RangeComponent = ({ data }) => {
  const { rangeValues } = data;
  return (
    <Range
      min={rangeValues[0]}
      max={rangeValues[rangeValues.length - 1]}
      rangeValues={rangeValues}
    />
  );
};

RangeComponent.propTypes = {
  data: PropTypes.shape({
    rangeValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

const Exercise2 = () => (
  <Exercise
    component={RangeComponent}
    title="Price Range: fixed values"
    fetchUrl={`${serviceUrl}/range-values`}
  />
);

export default Exercise2;
