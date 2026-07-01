import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { playlists } from '../data/playlists';

const years = [...new Set(playlists.map((p) => p.year))].sort((a, b) => b - a);

function Home() {
  return (
    <div>
      <Header title="Soundwave" />
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-6 py-10 sm:grid-cols-3 md:grid-cols-4">
        {years.map((year) => (
          <Link
            key={year}
            to={`/${year}`}
            className="rounded-lg bg-surface px-6 py-8 text-center text-xl font-semibold text-fg no-underline hover:opacity-80"
          >
            {year}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
