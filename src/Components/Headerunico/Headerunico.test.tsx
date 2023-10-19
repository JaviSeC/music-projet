import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Headerunico from './Headerunico';

describe('Headerunico component', () => {
  it('renders logo', () => {
    render(
      <Router>
        <Headerunico />
      </Router>
    );
    const logoElement = screen.getByAltText('logo') as HTMLImageElement;
    expect(logoElement).toBeDefined();
  });

  it('renders title', () => {
    render(
      <Router>
        <Headerunico />
      </Router>
    );
    const titleElement = screen.getByText(/Sound Tracks Magic/i);
    expect(titleElement).toBeDefined();
  });

  it('renders link to home', () => {
    render(
      <Router>
        <Headerunico />
      </Router>
    );
    const linkElement = screen.getByRole('link', { href: '/' });
    expect(linkElement).toBeDefined();
  });
});
