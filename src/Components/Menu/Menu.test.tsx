import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

describe('Menu component', () => {
  test('renders Menu component', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/Admin/i);
    expect(linkElement).toBeDefined();
  });

  test('dropdown opens on mouse enter', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );
    const dropdownButton = screen.getByAltText('categories');
    fireEvent.mouseEnter(dropdownButton);
    const dropdownContent = screen.getByText(/Ganadores Oscar🏆/i);
    expect(dropdownContent).toBeDefined();
  });

  test('dropdown closes on mouse leave', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );
    const dropdownButton = screen.getByAltText('categories');
    fireEvent.mouseEnter(dropdownButton);
    const dropdownContent = screen.getByText(/Ganadores Oscar🏆/i);
    expect(dropdownContent).toBeDefined();
    fireEvent.mouseLeave(dropdownButton);
    const closedDropdownContent = screen.queryByText(/Ganadores Oscar🏆/i);
    expect(closedDropdownContent).toBeNull();
  });
});
