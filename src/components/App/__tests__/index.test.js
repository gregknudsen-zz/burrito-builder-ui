import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';

describe('App Component', () => {
  it('renders', () => {
    render(<App />)
  })
  it('matches snapshot DOM node structure', () => {
    // Arrange the snapshot - declare variables
    const { asFragment } = render(<App />);
    // Assert the match
      expect(asFragment()).toMatchSnapshot();
    })
});