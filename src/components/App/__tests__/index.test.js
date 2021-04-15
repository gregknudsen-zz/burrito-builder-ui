import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';

describe('App Component', () => {
  it('renders', () => {
    render(<App />)
  })
});