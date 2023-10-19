import React from 'react';
import { render, screen } from '@testing-library/react';
import Body from './Body';

describe('Body Component', () => {
  test('renders Body component', () => {
    render(<Body />);
    const titleElement = screen.getByText(/Guardianes de la Galaxia: La Banda Sonora Intergaláctica/i);
    expect(titleElement).toBeTruthy();
  });

  test('renders avatar group', () => {
    render(<Body />);
    const avatarGroup = screen.getByTestId('avatar-group');
    expect(avatarGroup).toBeTruthy();
  });

  test('renders image carousel', () => {
    render(<Body />);
    const imageElement = screen.getByAltText(/Guardians of the Galaxy/i);
    expect(imageElement).toBeTruthy();
  });

  test('renders like and view counts', () => {
    render(<Body />);
    const likeElement = screen.getByText(/33K Likes/i);
    expect(likeElement).toBeTruthy();

    const viewElement = screen.getByText(/102.4k/i);
    expect(viewElement).toBeTruthy();
  });
});
