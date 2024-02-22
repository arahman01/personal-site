import Logo from "./logo";
import classes from "./main-navigation.module.css";

import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* when content inside a link is not text rather is for example a component, we need to manually add an anchor tag to tell next that this should be clickable. no need to add a href to anchor tag */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/aboutMe">About Me</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
