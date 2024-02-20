import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory); //file extensions included
}

export function getPostData(postIdentifier) {
  // post identifier is generic. it can have a slug or the slug with the .md extension(filename).
  // for index and post/index, we pass in a fileanme.
  // for post/[slug], we only pass the slug as we only have access to the slug in that file.
  // for this function, we only need a slug so we ensure that we have a slug(without extension)
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8"); //filecontewnt has the content of the file as a string
  const { data, content } = matter(fileContent);
  //matter returns an object with 2 properties. first is the data property. its a JS object which contains metadata and the second is th econtent property

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
