import './styles.css';
import Header from './Header';
import Playlist from './Playlist';
import Footer from './Footer';

function Playlists2021() {
    return (
        <div className="app">
            <Header title="2021"></Header>
            <Playlist title="January 2021" embedUrl="" ></Playlist>
            <Playlist title="February 2021" embedUrl="" ></Playlist>
            <Playlist title="March 2021" embedUrl="" ></Playlist>
            <Playlist title="April 2021" embedUrl="" ></Playlist>
            <Playlist title="May 2021" embedUrl="" ></Playlist>
            <Playlist title="June 2021" embedUrl="" ></Playlist>
            <Playlist title="July 2021" embedUrl="" ></Playlist>
            <Playlist title="August 2021" embedUrl="" ></Playlist>
            <Playlist title="September 2021" embedUrl="" ></Playlist>
            <Playlist title="October 2021" embedUrl="" ></Playlist>
            <Playlist title="November 2021" embedUrl="" ></Playlist>
            <Playlist title="December 2021" embedUrl="" ></Playlist>
            <Footer/>
        </div>
    );
}

export default Playlists2021;
