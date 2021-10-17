import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Range } from '.';

describe('Range component', () => {
  const mockUseRef = (elementProps) => {
    const mockRef = {
      get current() {
        return elementProps;
      },
      // eslint-disable-next-line no-empty-function
      set current(val) {},
    };

    jest.spyOn(React, 'useRef').mockReturnValue(mockRef);
  };
  const size = 250;

  beforeEach(() => {
    mockUseRef({ offsetWidth: size, style: {} });
  });

  describe('Normal range', () => {
    const min = 5;
    const max = 15;

    beforeEach(() => {
      render(<Range min={min} max={max} size={size} />);
    });

    it('renders the component correctly', () => {
      expect(screen.getByTestId('range-picker')).toBeInTheDocument();
    });

    it('does not allow to write value lower than min value', () => {
      const minInput = screen.getAllByTestId('range-input-number-input')[0];
      userEvent.clear(minInput);
      userEvent.type(minInput, '2');
      userEvent.tab();

      expect(minInput).toHaveValue(min);
    });

    it('does not allow to write value higher than max value', () => {
      const maxInput = screen.getAllByTestId('range-input-number-input')[1];
      userEvent.clear(maxInput);
      userEvent.type(maxInput, '20');
      userEvent.tab();

      expect(maxInput).toHaveValue(max);
    });

    it.skip('updates the bullet when a value is written in the min input', async () => {
      const minHandler = screen.getByTestId('min-handler');
      expect(minHandler).toHaveStyle(`left: 0`);

      const minInput = screen.getAllByTestId('range-input-number-input')[0];
      userEvent.clear(minInput);
      userEvent.type(minInput, '10');
      userEvent.tab();

      // This won't work, since DOM elements in Jest tests do not have some of the props needed to make position calculations
      await waitFor(() => expect(minHandler).toHaveStyle(`left: 50px`));
    });

    it.todo('updates the bullet when a value is written in the max input');

    it.todo('updates the value when the min bullet is dragged');

    it.todo('updates the value when the max bullet is dragged');

    it.todo(
      'does not allow to set min handler value higher than max handler value'
    );

    it.todo(
      'does not allow to set max handler value lower than min handler value'
    );
  });

  describe('Fixed values range', () => {
    const rangeValues = [1.99, 5.99, 10.99, 30.99, 50.99, 70.99];

    beforeEach(() => {
      render(<Range rangeValues={rangeValues} />);
    });

    it('renders the component correctly', () => {
      expect(screen.getByTestId('range-picker')).toBeInTheDocument();
    });

    it.todo(
      'sets the current min handler value to the first element in rangeValues prop if none provided'
    );

    it.todo(
      'sets the current max handler value to the last element in rangeValues prop if none provided'
    );

    it('sets the inputs as readOnly and does not let any of the inputs to be written on', () => {
      const minInput = screen.getAllByTestId('range-input-number-input')[0];
      const maxInput = screen.getAllByTestId('range-input-number-input')[1];

      const originalMinValue = minInput.value;
      const originalMaxValue = maxInput.value;

      expect(minInput).toHaveAttribute('readOnly');
      expect(maxInput).toHaveAttribute('readOnly');

      userEvent.clear(minInput);
      userEvent.type(minInput, '6');
      userEvent.clear(maxInput);
      userEvent.type(maxInput, '8');

      expect(minInput).toHaveDisplayValue(originalMinValue);
      expect(maxInput).toHaveDisplayValue(originalMaxValue);
    });

    it('sets the lower value as min if no min value is specified', () => {
      const minInput = screen.getAllByTestId('range-input-number-input')[0];
      expect(minInput).toHaveDisplayValue(rangeValues[0]);
    });

    it('sets the highger value as max if no max value is specified', () => {
      const maxInput = screen.getAllByTestId('range-input-number-input')[1];
      expect(maxInput).toHaveDisplayValue(rangeValues[rangeValues.length - 1]);
    });
  });
});
