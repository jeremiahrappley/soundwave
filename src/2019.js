import './styles.css';
import Header from './Header';
import Playlist from './Playlist';
import Footer from './Footer';

function Playlists2019() {
    return (
        <div className="app">
			<Header title="2019"></Header>
			<Playlist title="January 2019" embedUrl="" ></Playlist>
			<Playlist title="February 2019" embedUrl="" ></Playlist>
			<Playlist title="March 2019" embedUrl="" ></Playlist>
			<Playlist title="April 2019" embedUrl="" ></Playlist>
			<Playlist title="May 2019" embedUrl="" ></Playlist>
			<Playlist title="June 2019" embedUrl="" ></Playlist>
			<Playlist title="July 2019" embedUrl="" ></Playlist>
			<Playlist title="August 2019" embedUrl="" ></Playlist>
			<Playlist title="September 2019" embedUrl="" ></Playlist>
			<Playlist title="October 2019" embedUrl="" ></Playlist>
			<Playlist title="November 2019" embedUrl="" ></Playlist>
			<Playlist title="December 2019" embedUrl="" ></Playlist>
			<Footer/>
        </div>
    );
}

export default Playlists2019;
