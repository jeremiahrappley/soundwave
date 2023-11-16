import './styles.css';
import Header from './Header';
import Playlist from './Playlist';
import Footer from './Footer';

function Playlists2020() {
    return (
        <div className="app">
            <Header title="2020"></Header>
            <Playlist title="January 2020" embedUrl="" ></Playlist>
            <Playlist title="February 2020" embedUrl="" ></Playlist>
            <Playlist title="March 2020" embedUrl="" ></Playlist>
            <Playlist title="April 2020" embedUrl="" ></Playlist>
            <Playlist title="May 2020" embedUrl="" ></Playlist>
            <Playlist title="June 2020" embedUrl="" ></Playlist>
            <Playlist title="July 2020" embedUrl="" ></Playlist>
            <Playlist title="August 2020" embedUrl="" ></Playlist>
            <Playlist title="September 2020" embedUrl="" ></Playlist>
            <Playlist title="October 2020" embedUrl="" ></Playlist>
            <Playlist title="November 2020" embedUrl="" ></Playlist>
            <Playlist title="December 2020" embedUrl="" ></Playlist>
            <Footer/>
        </div>
    );
}

export default Playlists2020;

