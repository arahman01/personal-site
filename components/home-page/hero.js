import Image from "next/image";

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
      <h1>Hi, I am Abdul Rahman</h1>
      <p>
        i am a software engineer at confiz. i am currently working on front-end
        development.
      </p>
    </section>
  );
}

export default Hero;