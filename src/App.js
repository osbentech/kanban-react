import { Route, Routes } from "react-router-dom";
import Missions from "./components/Missions";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Rockets from "./components/Rockets";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />}></Route>
        <Route path="/missions" element={<Missions />}></Route>
        <Route path="/my-profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
