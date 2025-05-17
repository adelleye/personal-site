import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/header';

test('renders Resume link', () => {
  render(<Header />);
  const linkElement = screen.getAllByText(/Resume/i)[0];
  expect(linkElement).toBeInTheDocument();
});
