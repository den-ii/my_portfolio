import Navbar from "./components/navbar";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Outlet } from "react-router";

function Layout() {
  let { darkMode } = useContext(ThemeContext);
  let darkClass = darkMode ? "dark" : "light";
  return (
    <div className={`${darkClass}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
