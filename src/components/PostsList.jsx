// Xx: while not required, it is considered good practice to put different components into different files

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="React.js is awesome!" />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

// Xx: ul is unordered list
// Xx: about the wrapper: NewPost and ul were siblings, so must be wrapped. We used the <> this time.

export default PostsList;
