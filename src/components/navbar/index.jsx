import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { HashLink as Link } from "react-router-hash-link";
import { Link as NavLink, useLocation } from "react-router-dom";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { toggleMode, text, bg, darkMode, burger, setBurger } =
    useContext(ThemeContext);
  const location = useLocation();
  console.log(location);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  let navbarBg;
  let proj = location.pathname.includes("project") ? true : false;
  let fill = isTopOfPage ? "text-gray-100" : "text-primary-100";
  let navColor = isTopOfPage ? "text-gray-100" : "text-primary-100";
  let textColor = isTopOfPage
    ? "text-gray-100 font-bold"
    : "text-primary-100 font-bold";

  if (isTopOfPage && !proj) {
    navbarBg = "bg-primary-100 shadow";
    fill = "text-gray-100";
  } else {
    navbarBg = "bg-gray-100 shadow";
    fill = "text-primary-100";
    navColor = "text-primary-100";
    textColor = "text-primary-100 font-bold";
  }

  const logo = "</>";
  const burgerClass = burger ? "nav-active" : "nav-inactive";
  const shadowClass = burger ? "" : "nav_burger-inactive";
  const zClass = burger ? "z-50" : "-z-10";
  let dropdown;
  let burgerHandle;
  if (isTopOfPage && burger) {
    burgerHandle =
      " bg-gray-100 before:bg-gray-100 after:bg-gray-100 dark:bg-dark-secondary before:dark:bg-dark-secondary after:dark:bg-dark-secondary";
    dropdown = "bg-primary-100 dark:bg-primary-100 text-gray-100";
  } else if (!isTopOfPage && burger) {
    burgerHandle =
      "bg-primary-100 before:bg-primary-100 after:bg-primary-100 dark:bg-dark-secondary before:dark:bg-dark-secondary after:dark:bg-dark-secondary";
    dropdown =
      "bg-gray-100 text-primary-100 dark:bg-primary-100 dark:text-gray-100";
  } else if (!burger && isTopOfPage) {
    burgerHandle =
      "bg-gray-100 bg-gray-100 before:bg-gray-100 after:bg-gray-100 dark:bg-gray-100";
  } else if (!burger && !isTopOfPage) {
    burgerHandle =
      "bg-primary-100 before:bg-primary-100 after:bg-primary-100 dark:bg-gray-100 dark:before:bg-gray-100 dark:after:bg-gray-100";
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        // setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`h-12 md:h-16 px-6 md:px-20 fixed w-full flex flex-col justify-center ${navbarBg} dark:bg-primary-100 z-30`}
    >
      <nav className="flex items-center justify-between">
        <NavLink
          to="/"
          className={`font-Patua text-3xl font-bold ${navColor} dark:text-gray-100 dark:hover:text-dark-secondary cursor-pointer`}
        >
          {logo}
        </NavLink>
        <div className="flex gap-3 md:hidden">
          <button className="ml-5" onClick={toggleMode}>
            {/* <BsFillSunFill size={24} className={fill} /> */}
            {!darkMode && <FaSun size={24} className={fill} />}
            {darkMode && <BsFillMoonStarsFill size={24} color="#D4FF9D" />}
          </button>
          <div
            onClick={() => setBurger(!burger)}
            className={`burger ${burgerClass}`}
          >
            <div className={`burger-icon ${burgerHandle}`}></div>
          </div>
        </div>
        <div
          className={`w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bg-gray-800 dark:bg-transparent dark:backdrop-blur opacity-30 ${shadowClass}`}
        ></div>
        <div
          className={`mobile-nav__links ${burgerClass} text-lg font-Poppins ${dropdown}`}
        >
          <Link
            to="/"
            className="mb-3 mobile-nav__link"
            onClick={() => setBurger(false)}
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="mb-3 mobile-nav__link"
            onClick={() => setBurger(false)}
          >
            About
          </Link>
          <Link
            to="/#projects"
            className="mb-3 mobile-nav__link"
            onClick={() => setBurger(false)}
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="mb-3 mobile-nav__link"
            onClick={() => setBurger(false)}
          >
            Contact Me
          </Link>
        </div>
        <div
          className={`hidden ${textColor} dark:text-gray-100 font-Poppins md:flex gap-3 items-center`}
        >
          <Link
            to="/#about"
            className="font-Poppins text-lg dark:hover:text-dark-secondary"
          >
            About
          </Link>
          <Link
            to="/#projects"
            className="font-Poppins text-lg dark:hover:text-dark-secondary"
            offset={100}
          >
            Projects
          </Link>
          <Link
            to="/#contact"
            className="font-Poppins text-lg dark:hover:text-dark-secondary"
          >
            Contact
          </Link>
          <button className="ml-5" onClick={toggleMode}>
            {/* <BsFillSunFill size={24} className={fill} /> */}
            {!darkMode && <FaSun size={24} className={fill} />}
            {darkMode && <BsFillMoonStarsFill size={24} color="#D4FF9D" />}
          </button>
          <div
            onClick={() => setBurger(!burger)}
            className={`md:hidden burger ${burgerClass}`}
          >
            <div className="burger-icon"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
