import { render, screen } from '@testing-library/react';
import sigma from './Abb';

test('renders learn react link', () => {
  render(<sigma />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});