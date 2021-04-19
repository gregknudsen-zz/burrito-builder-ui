import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderForm from '../OrderForm.js';

describe('OrderForm Component', () => {
  it('renders', () => {
    render(<OrderForm />)
  })
  it('matches snapshot DOM node structure', () => {
    // Arrange the snapshot - declare variables
    const { asFragment } = render(<OrderForm />);
    // Assert the match
      expect(asFragment()).toMatchSnapshot();
  })
  it.skip('successfully adds an order when both fields have values', () => {
    const newOrder = {
      name: 'Bob',
      ingredients: ['mushrooms']
    }
    
  })


});