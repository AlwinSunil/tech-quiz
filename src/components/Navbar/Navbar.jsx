import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../App";
import "./Navbar.css";

function Navbar() {
  const { theme, switchTheme } = useContext(ThemeContext);

  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollClass = "scroll";
      if (window.scrollY > 0) {
        navRef.current.classList.add(scrollClass);
      } else {
        navRef.current.classList.remove(scrollClass);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="brand">
        <img className="logo" src="./icon.svg" alt="" />
        <span className="wordmark">Tech Quiz</span>
      </div>
      <div className="nav-actions">
        {theme === "light" ? (
          <button className="theme" onClick={switchTheme}>
            🌙
          </button>
        ) : (
          <button className="theme" onClick={switchTheme}>
            ☀️
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
