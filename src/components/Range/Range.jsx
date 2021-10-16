import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RangeInput } from '../RangeInput';
import { RangeSlider } from '../RangeSlider';
import rangePropTypes from '../../shared/rangePropTypes';
import styles from './styles.scss';

const Range = ({
  min,
  max,
  minHandlerValue,
  maxHandlerValue,
  rangeValues,
  size,
}) => {
  const [minValue, setMinValue] = useState(
    minHandlerValue || min || rangeValues[0]
  );
  const [maxValue, setMaxValue] = useState(
    maxHandlerValue || max || rangeValues[rangeValues.length - 1]
  );

  const [inputMinValue, setInputMinValue] = useState(minValue);
  const [inputMaxValue, setInputMaxValue] = useState(maxValue);

  const updateMinValue = (value) => {
    setInputMinValue(value);
  };

  const updateMaxValue = (value) => {
    setInputMaxValue(value);
  };

  const sanitizeMinValue = (value) => {
    let sanitizedValue = value;
    if (sanitizedValue >= maxValue) sanitizedValue = maxValue - 1;
    if (sanitizedValue < min) sanitizedValue = min;
    setInputMinValue(sanitizedValue);
    setMinValue(sanitizedValue);
  };

  const sanitizeMaxValue = (value) => {
    let sanitizedValue = value;
    if (sanitizedValue <= minValue) sanitizedValue = minValue + 1;
    if (sanitizedValue > max) sanitizedValue = max;
    setInputMaxValue(sanitizedValue);
    setMaxValue(sanitizedValue);
  };

  return (
    <div
      data-testid="range-picker"
      style={{ width: size }}
      className={styles.range__container}
    >
      <div className={styles.range__input_container}>
        <RangeInput
          min={min}
          max={max}
          currency=""
          value={inputMinValue}
          readOnly={!!rangeValues.length}
          onChange={updateMinValue}
          onBlur={sanitizeMinValue}
        />
        {' - '}
        <RangeInput
          min={min}
          max={max}
          value={inputMaxValue}
          readOnly={!!rangeValues.length}
          onChange={updateMaxValue}
          onBlur={sanitizeMaxValue}
        />
      </div>
      <RangeSlider
        min={min}
        max={max}
        rangeValues={rangeValues}
        minHandlerValue={minValue}
        maxHandlerValue={maxValue}
        onMinValueChange={sanitizeMinValue}
        onMaxValueChange={sanitizeMaxValue}
      />
    </div>
  );
};

Range.propTypes = {
  ...rangePropTypes,
  size: PropTypes.number,
};

/* eslint-disable react/default-props-match-prop-types */
Range.defaultProps = {
  min: undefined,
  max: undefined,
  minHandlerValue: undefined,
  maxHandlerValue: undefined,
  rangeValues: [],
  size: 250,
};
/* estlint-enable react/default-props-match-prop-types */

export default Range;
