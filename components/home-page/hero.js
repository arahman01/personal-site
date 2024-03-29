import Image from "next/image";
import SocialLinks from "../social-links/social-links";
import ResumeButton from "../resume-button/resume-button";
import { landingPageHeading, landingPageIntro } from "../../utility/texts";
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
      <div className={classes.grid}>
        <SocialLinks />
        <ResumeButton />
      </div>
    </section>
  );
}

export default Hero;
