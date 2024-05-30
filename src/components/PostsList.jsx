// Xx: while not required, it is considered good practice to put different components into different files
import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

// Xx: useState: comments/explanation in NewPost.jsx, as it was originally implemented there

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  // Xx: useState should be set to an array when the new state depends on the old state

  function addPostHandler(postData) {
    // Xx: adds the new post as the first post and shows the previous posts
    // setPosts([postData, ...posts]);
    // Xx: general rule using states, if shouldng use existing posts as the above, we cant do just "...posts", we should actually pass a function to setPosts
    setPosts((existingPosts) => [postData, ...existingPosts]);
    // Xx: the function will automatically receive the current state snapsnot so the existing posts and we return a new state value, adding the new post data and the previous posts
    // Xx: its similar to the previous code, but it is the suggested approach if the function depends on the previous state snapshot
    // Xx: the reason is react does not execute state updating functions instantly, it schedules these state updates; in case you have multiple state updates, you could potentially update state with an old state.
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

// Xx: ul is unordered list
// Xx: about the wrapper: NewPost and ul were siblings, so must be wrapped. We used the <> this time.

// Xx: if you wrap components with other components react wont know where to put the wrapped content;
// Xx: you have to tell react react where the components go using props

// Xx: modalIsVisible && -> the way js works, the code after && will only run if modalIsVisible is true, so this is a quick implementation, instead of other implementations
// Xx: the previous implementation was inputting the jsx code in a variable, which by the way, can be done

export default PostsList;
