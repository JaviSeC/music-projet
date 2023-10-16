import { render, screen, fireEvent } from '@testing-library/react';
import Tops from './Tops';

test('renders Tops component', () => {
  render(<Tops />);
  const songTitleElement = screen.getByText('Zero to Hero');
  expect(songTitleElement).to.exist;
});

test('updates like button state on click', () => {
    render(<Tops />);
    const likeButtons = screen.getAllByRole('button');
    const likeButtonElement = likeButtons[0]; 
    fireEvent.click(likeButtonElement);
  });
  
