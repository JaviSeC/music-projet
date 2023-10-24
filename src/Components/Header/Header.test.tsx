import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  render(<Header />);
  const logoElement = screen.getByAltText('logo');
  expect(logoElement).to.exist;
});

test('updates search query state on input change', () => {
  render(<Header />);
  const inputElement = screen.getByPlaceholderText('Search');
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(screen.getByText('test')).to.exist;
});
