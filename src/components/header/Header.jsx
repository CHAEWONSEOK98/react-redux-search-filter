import './header.css';

import { useState } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';

const Header = () => {
  const [darkTheme, setDarkTheme] = useState('false');

  const handleTheme = () => {
    setDarkTheme((prev) => !prev);

    let mainContainer = document.querySelector('.main-container');
    mainContainer.classList.toggle('dark');
  };

  return (
    <>
      <header className="header">
        <h1>Where in the world?</h1>
        {darkTheme ? (
          <div className="theme-light " onClick={handleTheme}>
            <BsMoonFill className="i" />
            <p>Dark Theme</p>
          </div>
        ) : (
          <div className="theme-dark" onClick={handleTheme}>
            <BsFillSunFill className="i" />
            <p>Light Theme</p>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
