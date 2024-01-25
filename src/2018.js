import './styles.css';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Footer from './components/Footer';

function Playlists2018() {
    return (
        <div className="app">
            <Header title="2018"></Header>
            <Playlist title="January 2018" embedUrl="https://embed.music.apple.com/us/playlist/january-2018/pl.u-Pa34hxzKbk" ></Playlist>
            <Playlist title="February 2018" embedUrl="https://embed.music.apple.com/us/playlist/february-2018/pl.u-YAKpcko25x" ></Playlist>
            <Playlist title="March 2018" embedUrl="https://embed.music.apple.com/us/playlist/march-2018/pl.u-YAN5hko25x" ></Playlist>
            <Playlist title="April 2018" embedUrl="https://embed.music.apple.com/us/playlist/april-2018/pl.u-RR4eWFBVP8x" ></Playlist>
            <Playlist title="May 2018" embedUrl="https://embed.music.apple.com/us/playlist/may-2018/pl.u-ApGyskXm97" ></Playlist>
            <Playlist title="June 2018" embedUrl="https://embed.music.apple.com/us/playlist/june-2018/pl.u-ApPmCkXm97" ></Playlist>
            <Playlist title="July 2018" embedUrl="https://embed.music.apple.com/us/playlist/july-2018/pl.u-Rxv7sBVP8x" ></Playlist>
            <Playlist title="August 2018" embedUrl="https://embed.music.apple.com/us/playlist/august-2018/pl.u-BjlNIMZv9p" ></Playlist>
            <Playlist title="September 2018" embedUrl="https://embed.music.apple.com/us/playlist/september-2018/pl.u-b4D7tbG9pL" ></Playlist>
            <Playlist title="October 2018" embedUrl="https://embed.music.apple.com/us/playlist/october-2018/pl.u-lJaJFez2Nx" ></Playlist>
            <Playlist title="November 2018" embedUrl="https://embed.music.apple.com/us/playlist/november-2018/pl.u-LvJBClZbok" ></Playlist>
            <Playlist title="December 2018" embedUrl="https://embed.music.apple.com/us/playlist/december-2018/pl.u-PAaVIxzKbk" ></Playlist>
            <Footer/>
        </div>
    );
}

export default Playlists2018;