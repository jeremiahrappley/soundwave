import './styles.css';
import Header from './Header';
import Playlist from './Playlist';
import Footer from './Footer';

function Playlists2020() {
    return (
        <div className="app">
            <Header title="2020"></Header>
            <Playlist title="January 2020" embedUrl="https://embed.music.apple.com/us/playlist/january-2020/pl.u-AqWpskXm97" ></Playlist>
            <Playlist title="February 2020" embedUrl="https://embed.music.apple.com/us/playlist/february-2020/pl.u-AqVehkXm97" ></Playlist>
            <Playlist title="March 2020" embedUrl="https://embed.music.apple.com/us/playlist/march-2020/pl.u-AqYmUkXm97" ></Playlist>
            <Playlist title="April 2020" embedUrl="https://embed.music.apple.com/us/playlist/april-2020/pl.u-lqaGhez2Nx" ></Playlist>
            <Playlist title="May 2020" embedUrl="https://embed.music.apple.com/us/playlist/may-2020/pl.u-62Byt50ANZ" ></Playlist>
            <Playlist title="June 2020" embedUrl="https://embed.music.apple.com/us/playlist/june-2020/pl.u-BN8xesMZv9p" ></Playlist>
            <Playlist title="July 2020" embedUrl="https://embed.music.apple.com/us/playlist/july-2020/pl.u-BN8x3uMZv9p" ></Playlist>
            <Playlist title="August 2020" embedUrl="https://embed.music.apple.com/us/playlist/august-2020/pl.u-LdPV4slZbok" ></Playlist>
            <Playlist title="September 2020" embedUrl="https://embed.music.apple.com/us/playlist/september-2020/pl.u-6mmxLF50ANZ" ></Playlist>
            <Playlist title="October 2020" embedUrl="https://embed.music.apple.com/us/playlist/october-2020/pl.u-LddLqulZbok" ></Playlist>
            <Playlist title="November 2020" embedUrl="https://embed.music.apple.com/us/playlist/november-2020/pl.u-Lddg5slZbok" ></Playlist>
            <Playlist title="December 2020" embedUrl="https://embed.music.apple.com/us/playlist/december-2020/pl.u-YmmDycko25x" ></Playlist>
            <Footer/>
        </div>
    );
}

export default Playlists2020;