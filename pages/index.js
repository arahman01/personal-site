import { Fragment } from "react";
import Head from "next/head";
import { Element } from "react-scroll/modules";
import { getFeaturedPosts } from "../lib/posts-util";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import ContactPage from "../components/contact";
import Projects from "../components/projects/projects";
import Experience from "../components/experience/experience";
import Skills from "../components/skills/skills";
import Education from "../components/education/education";
import layoutStyles from "../styles/layout.module.css";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Abdul Rahman</title>
        <meta name="description" content="Software Engineer" />
        <meta charset="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Hero></Hero>
      <div className={layoutStyles.container}>
        <Element name="aboutMe">
          <Skills />
          <Education />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="posts">
          <FeaturedPosts posts={props.posts} />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <ContactPage />
        </Element>
      </div>
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
