import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const RangeInput = ({
  min,
  max,
  value,
  currency,
  readOnly,
  onChange,
  onBlur,
}) => {
  const inputRef = useRef(null);
  const focusInput = () => inputRef.current?.focus();

  return (
    <div
      className={styles.rangeInput__container}
      data-testid="range-input-container"
      onClick={focusInput}
      onFocus={focusInput}
      role="textbox"
      tabIndex={0}
      onKeyDown={focusInput}
    >
      <input
        data-testid="range-input-number-input"
        tabIndex={0}
        className={styles.rangeInput__input}
        ref={inputRef}
        type="number"
        min={min}
        max={max}
        readOnly={readOnly}
        value={value}
        onBlur={(ev) => onBlur(ev.target.value)}
        onChange={(ev) => onChange(ev.target.value)}
      />
      <span>{currency}</span>
    </div>
  );
};
RangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  currency: PropTypes.string,
  onBlur: PropTypes.func,
  readOnly: PropTypes.bool,
};

RangeInput.defaultProps = {
  currency: '€',
  onBlur: () => null,
  readOnly: false,
};

export default RangeInput;
