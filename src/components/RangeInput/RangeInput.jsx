import React from 'react';
import PropTypes from 'prop-types';

const RangeInput = ({
  min,
  max,
  value,
  currency = '€',
  readOnly,
  onChange = () => null,
}) => {
  return (
    <div data-testid="range-input">
      <input
        type="number"
        min={min}
        max={max}
        readOnly={readOnly}
        value={value !== undefined ? value : min}
        onChange={onChange}
      />
      <span>{currency}</span>
    </div>
  );
};

RangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number,
  currency: PropTypes.string,
  onChange: PropTypes.func,
};

export default RangeInput;
