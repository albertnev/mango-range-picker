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
  const [minValue, setMinValue] = useState(minHandlerValue || min);
  const [maxValue, setMaxValue] = useState(maxHandlerValue || max);

  const updateMinValue = (value) => {
    let normalizedValue = value;
    if (normalizedValue < min) normalizedValue = min;
    if (normalizedValue > max) normalizedValue = max - 1;
    setMinValue(normalizedValue);
  };

  const updateMaxValue = (value) => {
    let normalizedValue = value;
    if (normalizedValue > max) normalizedValue = max;
    if (normalizedValue < min) normalizedValue = min + 1;
    setMaxValue(normalizedValue);
  };

  const sanitizeMaxValue = () => {
    let sanitizedValue = maxValue;
    if (sanitizedValue <= minValue) sanitizedValue = minValue + 1;
    if (sanitizedValue > max) sanitizedValue = max;
    setMaxValue(sanitizedValue);
  };

  const sanitizeMinValue = () => {
    let sanitizedValue = minValue;
    if (sanitizedValue >= maxValue) sanitizedValue = maxValue - 1;
    if (sanitizedValue < min) sanitizedValue = min;
    setMinValue(sanitizedValue);
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
          value={minValue}
          readOnly={!!rangeValues.length}
          onChange={updateMinValue}
          onBlur={sanitizeMinValue}
        />
        {' - '}
        <RangeInput
          min={min}
          max={max}
          value={maxValue}
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
        onMinValueChange={updateMinValue}
        onMaxValueChange={updateMaxValue}
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
  rangeValues: [],
  size: 250,
};
/* estlint-enable react/default-props-match-prop-types */

export default Range;
