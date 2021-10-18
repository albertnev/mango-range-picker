import React from 'react';
import PropTypes from 'prop-types';
import { Range } from '../../components/Range';
import { serviceUrl } from '../../shared/constants';
import { Exercise } from '../../containers/Exercise';

const RangeComponent = ({ data }) => (
  <Range min={data.min} max={data.max} minHandlerValue={20} />
);

RangeComponent.propTypes = {
  data: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};

const Exercise1 = () => (
  <Exercise
    component={RangeComponent}
    title="Price Range: free range"
    fetchUrl={`${serviceUrl}/min-max`}
  />
);

export default Exercise1;
