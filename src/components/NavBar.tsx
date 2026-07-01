import { Link, NavLink } from 'react-router-dom';
import { playlists } from '../data/playlists';

const years = [...new Set(playlists.map((p) => p.year))].sort((a, b) => b - a);

function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/5 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-fg no-underline transition hover:text-accent">
          Jeremiah Rappley
        </Link>
        <Link to="/" className="text-lg font-semibold tracking-tight text-accent no-underline">
          Soundwave
        </Link>
      </div>
      <nav className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-6 pb-3">
        {years.map((year) => (
          <NavLink
            key={year}
            to={`/${year}`}
            className={({ isActive }) =>
              `shrink-0 rounded-full px-3 py-1.5 text-sm font-medium no-underline transition ${
                isActive ? 'bg-accent text-bg' : 'text-muted hover:bg-surface hover:text-fg'
              }`
            }
          >
            {year}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
