import { useParams } from 'react-router-dom';
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
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-2">
        <h1 className="text-3xl font-bold text-fg sm:text-4xl">{year}</h1>
        <p className="mt-1 text-sm text-muted">
          {yearPlaylists.length} playlist{yearPlaylists.length === 1 ? '' : 's'}
        </p>
      </div>
      {yearPlaylists.length === 0 ? (
        <p className="mx-auto max-w-5xl px-6 py-10 text-center text-muted">No playlists found for {year}.</p>
      ) : (
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8">
          {yearPlaylists.map((playlist) => (
            <PlaylistEmbed key={playlist.title} title={playlist.title} embedUrl={playlist.embedUrl} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default YearPage;
