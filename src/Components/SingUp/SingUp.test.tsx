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

  test('submitting form with valid data', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const submitButton = screen.getByRole('button', { name: /Sign Up/i });

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/UserName/i), {
      target: { value: 'johndoe' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'johndoe@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(submitButton);

    // Add your assertions here based on the expected behavior after form submission
  });
});
