import React from 'react';
import { render } from '@testing-library/react';
import { Range } from '.';

describe('Range component', () => {
  describe('Normal range', () => {
    beforeEach(() => {
      render(<Range />);
    });

    it.todo('renders the component correctly');

    it.todo('does not allow to set value lower than min value');

    it.todo('does not allow to set value higher than max value');

    it.todo('updates the bullet when a value is written in the min input');

    it.todo('updates the bullet when a value is written in the max input');

    it.todo('updates the value when the min bullet is dragged');

    it.todo('updates the value when the max bullet is dragged');

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
      render(<Range rangeValues={rangeValues} />);
    });

    it.todo('renders the component correctly');

    it.todo('does not let any of the inputs to be written on');

    it.todo('sets the lower value as min if no min value is specified');

    it.todo('sets the highger value as max if no max value is specified');

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
