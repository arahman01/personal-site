import Image from "next/image";

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
    </section>
  );
}

export default Hero;
