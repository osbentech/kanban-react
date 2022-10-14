import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const Image = ('./assets/planet.png');

  return (
    <header className="header">
      <img
        src={Image}
        style={{ width: '50px' }}
        className="logo"
        alt="space-hub"
      />
      <h2 className="title">
        Space Travelers&apos; Hub
      </h2>
      <div className="nav-links">
        <NavLink to="/rockets" className="link">Rockets</NavLink>
        <NavLink to="/missions" className="link">Missions</NavLink>
        <span className="separator">|</span>
        <NavLink to="/my-profile" className="link">My Profile</NavLink>
      </div>
    </header>
  );
};

export default NavBar;
