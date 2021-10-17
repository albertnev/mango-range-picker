import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { loadingMessage, fetchErrorMessage } from '../../shared/constants';
import Exercise2 from './Exercise2';

describe('Exercise 2 page', () => {
  const renderPage = () => render(<Exercise2 />);
  const mockFetch = (successful, response, delay = 0) => {
    global.fetch = jest.fn(
      async () =>
        new Promise((resolve) => {
          setTimeout(
            () =>
              resolve({
                ok: successful,
                json: () => Promise.resolve(response),
              }),
            delay
          );
        })
    );
  };

  it('renders component if fetch returns successful response', () => {
    mockFetch(true, { rangeValues: [1, 2, 3, 4, 5] });
    renderPage();
    waitFor(() =>
      expect(screen.getByTestId('range-picker')).toBeInTheDocument()
    );
  });

  it('shows an error message if there is an error in fetch process', () => {
    mockFetch(false, {});
    renderPage();
    waitFor(() =>
      expect(screen.getByText(fetchErrorMessage)).toBeInTheDocument()
    );
  });

  it('shows loading message while the fetch has not been resolved', () => {
    mockFetch(true, {}, 500);
    renderPage();
    waitFor(() => expect(screen.getByText(loadingMessage)).toBeInTheDocument());
  });
});
