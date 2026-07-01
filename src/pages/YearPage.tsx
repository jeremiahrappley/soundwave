import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PlaylistEmbed from '../components/PlaylistEmbed';
import Footer from '../components/Footer';
import { playlists } from '../data/playlists';
import { monthIndex } from '../data/months';

function YearPage() {
  const { year } = useParams<{ year: string }>();
  const yearPlaylists = playlists
    .filter((p) => p.year === Number(year))
    .sort((a, b) => monthIndex(a.month) - monthIndex(b.month));

  return (
    <div>
      <Header title={year ?? ''} />
      {yearPlaylists.length === 0 ? (
        <p className="mx-auto max-w-[1200px] px-6 py-10 text-center">No playlists found for {year}.</p>
      ) : (
        yearPlaylists.map((playlist) => (
          <PlaylistEmbed key={playlist.title} title={playlist.title} embedUrl={playlist.embedUrl} />
        ))
      )}
      <Footer />
    </div>
  );
}

export default YearPage;
