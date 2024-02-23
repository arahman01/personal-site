import classes from "./all-posts.module.css";
import PostGrid from "./posts-grid";
import { allPostsTitle } from "../../utility/texts";

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>{allPostsTitle}</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
