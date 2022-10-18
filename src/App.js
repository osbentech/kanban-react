import { Route, Routes } from 'react-router-dom';
import Mission from './components/Mission';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
