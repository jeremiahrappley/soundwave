import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('links to every year present in the playlist data, newest first', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const links = screen.getAllByRole('link').map((link) => link.textContent);
    expect(links).toContain('2024');
    expect(links).toContain('2018');
    expect(links.indexOf('2024')).toBeLessThan(links.indexOf('2018'));
  });
});
