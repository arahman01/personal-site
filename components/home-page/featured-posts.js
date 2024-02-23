import { useRouter } from "next/router";

import PostGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  const router = useRouter();

  const handleViewAllPostsClick = () => {
    router.push("/posts");
  };

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
      <div className={classes.actions}>
        <button onClick={handleViewAllPostsClick}>View All Posts</button>
      </div>
    </section>
  );
}

export default FeaturedPosts;
