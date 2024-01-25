import './styles.css';
import Header from './Header';
import Playlist from './Playlist';
import Footer from './Footer';

function Playlists2024() {
	return (
		<div className="app">
			<Header title="2024"></Header>
			<Playlist title="January 2024" embedUrl="https://embed.music.apple.com/us/playlist/january-2024/pl.u-6mZeyF50ANZ" ></Playlist>
			<Footer/>
    	</div>
	);
}

export default Playlists2024;
