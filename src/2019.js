import './styles.css';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Footer from './components/Footer';

function Playlists2019() {
    return (
        <div className="app">
			<Header title="2019"></Header>
			<Playlist title="January 2019" embedUrl="https://embed.music.apple.com/us/playlist/january-2019/pl.u-ZE6lc4aYMz" ></Playlist>
			<Playlist title="February 2019" embedUrl="https://embed.music.apple.com/us/playlist/february-2019/pl.u-b0p8tbG9pL" ></Playlist>
			<Playlist title="March 2019" embedUrl="https://embed.music.apple.com/us/playlist/march-2019/pl.u-vV6MsXRYe1" ></Playlist>
			<Playlist title="April 2019" embedUrl="https://embed.music.apple.com/us/playlist/april-2019/pl.u-AovkskXm97" ></Playlist>
			<Playlist title="May 2019" embedUrl="https://embed.music.apple.com/us/playlist/may-2019/pl.u-b0M9CbG9pL" ></Playlist>
			<Playlist title="June 2019" embedUrl="https://embed.music.apple.com/us/playlist/june-2019/pl.u-lD76Iez2Nx" ></Playlist>
			<Playlist title="July 2019" embedUrl="https://embed.music.apple.com/us/playlist/july-2019/pl.u-6dEmu50ANZ" ></Playlist>
			<Playlist title="August 2019" embedUrl="https://embed.music.apple.com/us/playlist/august-2019/pl.u-lDGYsez2Nx" ></Playlist>
			<Playlist title="September 2019" embedUrl="https://embed.music.apple.com/us/playlist/september-2019/pl.u-6dKvF50ANZ" ></Playlist>
			<Playlist title="October 2019" embedUrl="https://embed.music.apple.com/us/playlist/october-2019/pl.u-6d6Zu50ANZ" ></Playlist>
			<Playlist title="November 2019" embedUrl="https://embed.music.apple.com/us/playlist/november-2019/pl.u-LVk4ulZbok" ></Playlist>
			<Playlist title="December 2019" embedUrl="https://embed.music.apple.com/us/playlist/december-2019/pl.u-PeRpFxzKbk" ></Playlist>
			<Footer/>
        </div>
    );
}

export default Playlists2019;