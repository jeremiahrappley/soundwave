import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import YearPage from './pages/YearPage';

function App() {
  return (
    <BrowserRouter basename="/soundwave">
      <div className="min-h-screen bg-bg text-fg">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:year" element={<YearPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
