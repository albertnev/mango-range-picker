import React from 'react';
import PropTypes from 'prop-types';
import { RangeInput } from '../RangeInput';

const Range = ({ min, max, rangeValues }) => {
  return <div data-testid="range-picker"></div>;
};

Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  rangeValues: PropTypes.arrayOf(PropTypes.number),
};

export default Range;
