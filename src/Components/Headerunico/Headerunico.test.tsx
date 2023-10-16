import React from 'react';
import { render, screen } from '@testing-library/react';
import Headerunico from './Headerunico';

describe('Headerunico component', () => {
  it('renders logo', () => {
    render(<Headerunico />);
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeTruthy();
  });

  it('renders title', () => {
    render(<Headerunico />);
    const titleElement = screen.getByText('Sound Tracks Magic');
    expect(titleElement).toBeTruthy();
  });
});
