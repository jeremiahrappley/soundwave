import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { playlists } from '../data/playlists';

const years = [...new Set(playlists.map((p) => p.year))].sort((a, b) => b - a);

function playlistCount(year: number) {
  return playlists.filter((p) => p.year === year).length;
}

function Home() {
  return (
    <div>
      <div className="mx-auto max-w-5xl px-6 pt-12 pb-2">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">Since 2018</p>
        <h1 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">Monthly favorites, one playlist at a time</h1>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-10 sm:grid-cols-3 md:grid-cols-4">
        {years.map((year) => (
          <Link
            key={year}
            to={`/${year}`}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface px-6 py-10 text-center no-underline transition duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
          >
            <span className="block text-2xl font-bold text-fg transition group-hover:text-accent">{year}</span>
            <span className="mt-1 block text-xs text-muted">
              {playlistCount(year)} playlist{playlistCount(year) === 1 ? '' : 's'}
            </span>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
