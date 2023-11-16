import './styles.css';
import Header from './Header';
import Playlist from './Playlist';
import Footer from './Footer';

function Playlists2018() {
    return (
        <div className="app">
            <Header title="2018"></Header>
            <Playlist title="January 2018" embedUrl="" ></Playlist>
            <Playlist title="February 2018" embedUrl="" ></Playlist>
            <Playlist title="March 2018" embedUrl="" ></Playlist>
            <Playlist title="April 2018" embedUrl="" ></Playlist>
            <Playlist title="May 2018" embedUrl="" ></Playlist>
            <Playlist title="June 2018" embedUrl="" ></Playlist>
            <Playlist title="July 2018" embedUrl="" ></Playlist>
            <Playlist title="August 2018" embedUrl="" ></Playlist>
            <Playlist title="September 2018" embedUrl="" ></Playlist>
            <Playlist title="October 2018" embedUrl="" ></Playlist>
            <Playlist title="November 2018" embedUrl="" ></Playlist>
            <Playlist title="December 2018" embedUrl="" ></Playlist>
            <Footer/>
        </div>
    );
}

export default Playlists2018;
