import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login component', () => {
  it('renders without error', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  it('displays login button', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const buttonElement = screen.getByRole('button', { name: /Login/i });
    expect(buttonElement).toBeTruthy();
  });

  it('handles form submission with valid data', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText(/UserName/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole('button', { name: /Login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);
  });

  it('displays forgot password link', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const forgotPasswordLink = screen.getByText(/Forgot password?/i);
    expect(forgotPasswordLink).toBeTruthy();
  });

  it('displays sign up link', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const signUpLink = screen.getByText(/Don't have an account\? Sign Up/i);
    expect(signUpLink).toBeTruthy();
  });
});
