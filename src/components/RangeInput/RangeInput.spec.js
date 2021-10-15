import React from 'react';
import { render } from '@testing-library/react';
import { RangeInput } from '.';

describe('RangeInput component', () => {
  beforeEach(() => {
    render(<RangeInput />);
  });

  it.todo('renders the component successfully');

  it.todo('does not let to set a value lower than min value');

  it.todo('does not let to set a value highger than max value');

  it.todo('if no value is specified, min value is set as default value');

  it.todo('executes the provided onChange method when the value changes');

  it.todo('does not allow to change value when it has readOnly set to true');
});
