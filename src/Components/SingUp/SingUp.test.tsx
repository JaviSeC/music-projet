import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './SingUp';

describe('SignUp component', () => {
  test('renders SignUp component', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const linkElements = screen.queryAllByText(/Sign up/i);
    expect(linkElements.length).toBeGreaterThan(0);
  });

 
});
