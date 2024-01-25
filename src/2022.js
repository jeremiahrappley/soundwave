import './styles.css';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Footer from './components/Footer';

function Playlists2022() {
	return (
    	<div className="app">
			<Header title="2022"></Header>
			<Playlist title="January 2022" embedUrl="https://embed.music.apple.com/us/playlist/january-2022/pl.u-YmzXytko25x" ></Playlist>
			<Playlist title="February 2022" embedUrl="https://embed.music.apple.com/us/playlist/february-2022/pl.u-AkB6pckXm97" ></Playlist>
			<Playlist title="March 2022" embedUrl="https://embed.music.apple.com/us/playlist/march-2022/pl.u-BNJvWCMZv9p" ></Playlist>
			<Playlist title="April 2022" embedUrl="https://embed.music.apple.com/us/playlist/april-2022/pl.u-AkdG9CkXm97" ></Playlist>
			<Playlist title="May 2022" embedUrl="https://embed.music.apple.com/us/playlist/may-2022/pl.u-Ld9K4slZbok" ></Playlist>
			<Playlist title="June 2022" embedUrl="https://embed.music.apple.com/us/playlist/june-2022/pl.u-Zm7Bjc4aYMz" ></Playlist>
			<Playlist title="July 2022" embedUrl="https://embed.music.apple.com/us/playlist/july-2022/pl.u-vxBPYFXRYe1" ></Playlist>
			<Playlist title="August 2022" embedUrl="https://embed.music.apple.com/us/playlist/august-2022/pl.u-6mLoyc50ANZ" ></Playlist>
			<Playlist title="September 2022" embedUrl="https://embed.music.apple.com/us/playlist/september-2022/pl.u-Ldg6jIlZbok" ></Playlist>
			<Playlist title="October 2022" embedUrl="https://embed.music.apple.com/us/playlist/october-2022/pl.u-Ldg6BulZbok" ></Playlist>
			<Playlist title="November 2022" embedUrl="https://embed.music.apple.com/us/playlist/november-2022/pl.u-6mqDyu50ANZ" ></Playlist>
			<Playlist title="December 2022" embedUrl="https://embed.music.apple.com/us/playlist/december-2022/pl.u-PDMg5uxzKbk" ></Playlist>
			<Footer/>
    	</div>
	);
}

export default Playlists2022;