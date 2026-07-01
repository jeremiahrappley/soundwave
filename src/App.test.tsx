import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the home page with a link for every year', () => {
    render(<App />);
    expect(screen.getAllByRole('link', { name: '2024' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: '2018' }).length).toBeGreaterThan(0);
  });
});
