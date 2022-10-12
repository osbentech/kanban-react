import { Route, Routes } from "react-router-dom";
import Mission from "./components/Mission";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Rocket from "./components/Rocket";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />}></Route>
        <Route path="/missions" element={<Mission />}></Route>
        <Route path="/my-profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
