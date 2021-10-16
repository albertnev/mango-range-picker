import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RangeInput } from '.';

describe('RangeInput component', () => {
  let rerender;
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const min = 5;
  const max = 15;

  const writeInInput = (input, text) => {
    userEvent.clear(input);
    userEvent.type(input, text);
  };

  // eslint-disable-next-line react/prop-types
  const InputWrapper = ({ value, ...props }) => {
    const [val, setVal] = useState(value);

    return (
      <RangeInput
        min={min}
        max={max}
        value={val}
        onChange={(inputVal) => {
          onChange(inputVal);
          setVal(inputVal);
        }}
        onBlur={onBlur}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    );
  };

  const renderInput = (value) => render(<InputWrapper value={value} />);

  beforeEach(() => {
    ({ rerender } = renderInput(6));
  });

  it('renders the component successfully', () => {
    expect(screen.getByTestId('range-input-container')).toBeInTheDocument();
  });

  it('renders custom currency if provided', () => {
    const currency = '$';

    rerender(<InputWrapper value={6} currency={currency} />);

    expect(screen.getByText(currency)).toBeInTheDocument();
  });

  it('renders currency € as default if none is provided', () => {
    expect(screen.getByText('€')).toBeInTheDocument();
  });

  it('focuses input when clicking on the container', () => {
    userEvent.click(screen.getByTestId('range-input-container'));
    expect(screen.getByTestId('range-input-number-input')).toHaveFocus();
  });

  it('executes the provided onChange method when the value changes with the value parsed to int', () => {
    const textToWrite = '10';

    writeInInput(screen.getByTestId('range-input-number-input'), textToWrite);
    expect(onChange).toHaveBeenCalledWith(parseInt(textToWrite, 10));
  });

  it('executes the provided onBlur method when the input loses focus', () => {
    const input = screen.getByTestId('range-input-number-input');
    fireEvent.blur(input);

    expect(onBlur).toHaveBeenCalled();
  });

  it('does not allow to change value when it has readOnly set to true', () => {
    rerender(<InputWrapper value={6} readOnly />);

    const input = screen.getByTestId('range-input-number-input');
    writeInInput(input, '10');

    expect(onChange).not.toHaveBeenCalled();
    expect(input).toHaveValue(6);
  });

  it('behaves correctly and does nothing if onBlur prop is not provided', () => {
    rerender(<InputWrapper value={6} onBlur={undefined} />);
    const input = screen.getByTestId('range-input-number-input');
    // If an error is thrown, test will fail; otherwise, everything is ok
    fireEvent.blur(input);
  });
});
