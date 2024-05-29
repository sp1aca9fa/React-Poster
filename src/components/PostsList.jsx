// Xx: while not required, it is considered good practice to put different components into different files
import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

// Xx: useState: comments/explanation in NewPost.jsx, as it was originally implemented there

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author="Maximilian" body={enteredBody} />
        <Post author={enteredAuthor} body="Check out the full course!" />
      </ul>
    </>
  );
}

// Xx: ul is unordered list
// Xx: about the wrapper: NewPost and ul were siblings, so must be wrapped. We used the <> this time.

// Xx: if you wrap components with other components react wont know where to put the wrapped content;
// Xx: you have to tell react react where the components go using props

export default PostsList;
