import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./logo";
import classes from "./main-navigation.module.css";
import Link from "next/link";

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeIsMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <Link href="/">
        {/* when content inside a link is not text rather is for example a component, we need to manually add an anchor tag to tell next that this should be clickable. no need to add a href to anchor tag */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul className={isMenuOpen ? classes.show : ""}>
          <li onClick={closeIsMenu}>
            <Link href="/aboutMe">About Me</Link>
          </li>
          <li onClick={closeIsMenu}>
            <Link href="/experience">Experience</Link>
          </li>
          <li onClick={closeIsMenu}>
            <Link href="/posts">Posts</Link>
          </li>
          <li onClick={closeIsMenu}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button
          className={classes.burgerMenu}
          onClick={toggleMenu}
          id="burger-menu"
        >
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
}

export default MainNavigation;
