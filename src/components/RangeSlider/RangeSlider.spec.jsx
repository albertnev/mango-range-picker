import React from 'react';
import { render, screen } from '@testing-library/react';
import { RangeSlider } from '.';

describe('Range component', () => {
  describe('Normal range', () => {
    const min = 5;
    const max = 15;
    const onMinValueChange = jest.fn();
    const onMaxValueChange = jest.fn();

    beforeEach(() => {
      render(
        <RangeSlider
          min={min}
          max={max}
          onMinValueChange={onMinValueChange}
          onMaxValueChange={onMaxValueChange}
        />
      );
    });

    it('renders the component correctly', () => {
      expect(screen.getByTestId('slider-wrapper')).toBeInTheDocument();
    });

    it.todo(
      'does not let to drag the max bullet to a lower value than current position of min bullet'
    );

    it.todo(
      'does not let to drag the min bullet to a higher value than current position of max bullet'
    );
  });

  describe('Fixed values range', () => {
    const rangeValues = [1.99, 5.99, 10.99, 30.99, 50.99, 70.99];

    beforeEach(() => {
      render(<RangeSlider rangeValues={rangeValues} />);
    });

    it('renders the component correctly', () => {
      expect(screen.getByTestId('slider-wrapper')).toBeInTheDocument();
    });

    it.todo(
      'dragging a bullet sets the value to the closest one of the fixed values'
    );

    it.todo(
      'does not let to drag the max bullet to a lower value than current position of min bullet'
    );

    it.todo(
      'does not let to drag the min bullet to a higher value than current position of max bullet'
    );
  });
});
