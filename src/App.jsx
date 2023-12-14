import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import "./App.css";

export const ThemeContext = createContext();
export const RouteContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [route, setRoute] = useState("/");

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const updateCSSVariables = (theme) => {
    const root = document.documentElement;

    root.style.setProperty("--default", `var(--${theme}-default)`);
    root.style.setProperty("--text", `var(--${theme}-text)`);
    root.style.setProperty("--accent", `var(--${theme}-accent)`);
    root.style.setProperty("--bg", `var(--${theme}-bg)`);
    root.style.setProperty("--bg-secondary", `var(--${theme}-bg-secondary)`);
    root.style.setProperty("--separator", `var(--${theme}-separator)`);
    root.style.setProperty("--nav-shadow", `var(--${theme}-nav-shadow)`);
  };

  useEffect(() => {
    updateCSSVariables(theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, switchTheme }}>
        <RouteContext.Provider value={{ setRoute }}>
          {route === "/" && <Home />}
          {route === "/quiz" && <Quiz />}
        </RouteContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
