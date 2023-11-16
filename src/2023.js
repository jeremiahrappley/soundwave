import './styles.css';
import Header from './Header';
import Playlist from './Playlist';
import Footer from './Footer';

function Playlists2023() {
	return (
		<div className="app">
			<Header title="2023"></Header>
			<Playlist title="January 2023" embedUrl="https://embed.music.apple.com/us/playlist/january-2023/pl.u-YmZDpHko25x" ></Playlist>
			<Playlist title="February 2023" embedUrl="https://embed.music.apple.com/us/playlist/february-2023/pl.u-RRdMDsBVP8x" ></Playlist>
			<Playlist title="March 2023" embedUrl="https://embed.music.apple.com/us/playlist/march-2023/pl.u-le4XAHez2Nx" ></Playlist>
			<Playlist title="April 2023" embedUrl="https://embed.music.apple.com/us/playlist/april-2023/pl.u-6mq93I50ANZ" ></Playlist>
			<Playlist title="May 2023" embedUrl="https://embed.music.apple.com/us/playlist/may-2023/pl.u-ZmkYoF4aYMz" ></Playlist>
			<Playlist title="June 2023" embedUrl="https://embed.music.apple.com/us/playlist/june-2023/pl.u-ZmxMGc4aYMz" ></Playlist>
			<Playlist title="July 2023" embedUrl="https://embed.music.apple.com/us/playlist/july-2023/pl.u-PDzq6txzKbk" ></Playlist>
			<Playlist title="August 2023" embedUrl="https://embed.music.apple.com/us/playlist/august-2023/pl.u-6mlDmf50ANZ" ></Playlist>
			<Playlist title="September 2023" embedUrl="https://embed.music.apple.com/us/playlist/september-2023/pl.u-6m4a4F50ANZ" ></Playlist>
			<Playlist title="October 2023" embedUrl="https://embed.music.apple.com/us/playlist/october-2023/pl.u-Zmljlh4aYMz" ></Playlist>
			<Playlist title="November 2023" embedUrl="https://embed.music.apple.com/us/playlist/november-2023/pl.u-ZmDDJh4aYMz" ></Playlist>
			<Footer/>
    	</div>
	);
}

export default Playlists2023;
