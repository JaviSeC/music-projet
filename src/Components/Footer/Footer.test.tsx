import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

test('renders the footer', () => {
  render(<Footer />);
  const footerElement = screen.getByTestId('div-footer');
  expect(footerElement).toBeInTheDocument();
});

test('renders the contact section', () => {
  render(<Footer />);
  const contactSectionElement = screen.getByTestId('div-contactos');
  expect(contactSectionElement).toBeInTheDocument();
});

test('renders the title section', () => {
  render(<Footer />);
  const titleSectionElement = screen.getByTestId('div-titulo');
  expect(titleSectionElement).toBeInTheDocument();
});

test('renders the social media section', () => {
  render(<Footer />);
  const socialMediaSectionElement = screen.getByTestId('div-redes-sociales');
  expect(socialMediaSectionElement).toBeInTheDocument();
});
