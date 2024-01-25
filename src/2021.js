import './styles.css';
import Header from './Header';
import Playlist from './Playlist';
import Footer from './Footer';

function Playlists2021() {
    return (
        <div className="app">
            <Header title="2021"></Header>
            <Playlist title="January 2021" embedUrl="https://embed.music.apple.com/us/playlist/january-2021/pl.u-AkkeNSkXm97" ></Playlist>
            <Playlist title="February 2021" embedUrl="https://embed.music.apple.com/us/playlist/february-2021/pl.u-Ymml0Cko25x" ></Playlist>
            <Playlist title="March 2021" embedUrl="https://embed.music.apple.com/us/playlist/march-2021/pl.u-AkkLeSkXm97" ></Playlist>
            <Playlist title="April 2021" embedUrl="https://embed.music.apple.com/us/playlist/april-2021/pl.u-RRRM1uBVP8x" ></Playlist>
            <Playlist title="May 2021" embedUrl="https://embed.music.apple.com/us/playlist/may-2021/pl.u-RRRARCBVP8x" ></Playlist>
            <Playlist title="June 2021" embedUrl="https://embed.music.apple.com/us/playlist/june-2021/pl.u-BNNZWCMZv9p" ></Playlist>
            <Playlist title="July 2021" embedUrl="https://embed.music.apple.com/us/playlist/july-2021/pl.u-BNp7bFMZv9p" ></Playlist>
            <Playlist title="August 2021" embedUrl="https://embed.music.apple.com/us/playlist/august-2021/pl.u-lexZLFez2Nx" ></Playlist>
            <Playlist title="September 2021" embedUrl="https://embed.music.apple.com/us/playlist/september-2021/pl.u-AkZgyhkXm97" ></Playlist>
            <Playlist title="October 2021" embedUrl="https://embed.music.apple.com/us/playlist/october-2021/pl.u-lexoeUez2Nx" ></Playlist>
            <Playlist title="November 2021" embedUrl="https://embed.music.apple.com/us/playlist/november-2021/pl.u-BNpjVTMZv9p" ></Playlist>
            <Playlist title="December 2021" embedUrl="https://embed.music.apple.com/us/playlist/december-2021/pl.u-PDRE4uxzKbk" ></Playlist>
            <Footer/>
        </div>
    );
}

export default Playlists2021;