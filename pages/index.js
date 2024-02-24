import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import { Element } from "react-scroll/modules";
import ContactPage from "./contact";

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
      <Element name="posts">
        <FeaturedPosts posts={props.posts} />
      </Element>
      <Element name="contact">
        <ContactPage />
      </Element>
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
