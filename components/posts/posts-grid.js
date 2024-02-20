import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

function PostGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
        {/* as we are using map to render another component, we need to add a key. it would be a slug which is a unique identifier for a given post */}
        {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
