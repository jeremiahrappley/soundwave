import './styles.css';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Playlists2023 from './2023';
import Playlists2022 from './2022';
import Playlists2021 from './2021';
import Playlists2020 from './2020';
import Playlists2019 from './2019';
import Playlists2018 from './2018';

function App() {
  return (
    <div className="app">
		<Router>
		    <Navbar />
			<Routes>
 				<Route path="/2023" element={<Playlists2023 />} />
				<Route path="/2022" element={<Playlists2022 />} />
				<Route path="/2021" element={<Playlists2021 />} />
				<Route path="/2020" element={<Playlists2020 />} />
				<Route path="/2019" element={<Playlists2019 />} />
				<Route path="/2018" element={<Playlists2018 />} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
