import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  // we are using li becasue its coming from posts grid which is a ul. we use link to make the post clickable. we need to use an anchor tag in it because the content rendered in the link is not just some plain text.
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.Image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            ></Image>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
