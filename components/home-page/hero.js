import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import {
  landingPageHeading,
  landingPageIntro,
  linkedinLink,
  githubLink,
} from "../../utility/texts";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mypic.jpg"
          alt="an image of Abdul Rahman"
          width={200}
          height={300}
        />
      </div>
      <h1>{landingPageHeading}</h1>
      <p>{landingPageIntro}</p>
      <div className={classes.socials}>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <CiLinkedin />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Hero;
