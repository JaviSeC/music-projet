import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel'; // Replace with the correct path to your Carousel component
import userEvent from '@testing-library/user-event';

describe('Carousel component', () => {
  it('renders the component', () => {
    render(<Carousel />);
    const carouselElement = screen.getByAltText('Tarjeta 1');
    expect(carouselElement).toBeTruthy();
  });

  test('audio player works correctly', () => {
    render(<Carousel />);
    const carouselElement = screen.getByAltText('Tarjeta 1');
    userEvent.click(carouselElement);
    const audioPlayer = screen.getByTestId('audio-player');
    expect(audioPlayer).toBeDefined();
  });
  
});
