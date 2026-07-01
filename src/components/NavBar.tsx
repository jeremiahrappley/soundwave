import { Link, NavLink } from 'react-router-dom';
import { playlists } from '../data/playlists';

const years = [...new Set(playlists.map((p) => p.year))].sort((a, b) => b - a);

function NavBar() {
  return (
    <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-4 py-3">
      <Link to="/" className="px-2 py-2 text-xl font-bold text-fg no-underline hover:text-surface">
        Jeremiah Rappley
      </Link>
      <div className="flex flex-wrap">
        {years.map((year) => (
          <NavLink
            key={year}
            to={`/${year}`}
            className={({ isActive }) =>
              `px-2 py-2 font-semibold no-underline hover:text-surface ${isActive ? 'text-surface' : 'text-fg'}`
            }
          >
            {year}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
