// Xx: while not required, it is considered good practice to put different components into different files
import { useState, useEffect } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

// Xx: useState: comments/explanation in NewPost.jsx, as it was originally implemented there

function PostsList({ isPosting, onStopPosting }) {
  // Xx: cannot use await async directly in functions in React components, because components should not return promises, only jsx, at least as a standard (we could use some react library? to handle it, apparently)
  const [posts, setPosts] = useState([]);
  // Xx: useState should be set to an array when the new state depends on the old state

  // Xx: useEffect is the way to receive data from the backend by updating state and without running into an infinite loop (as we would if we just implemented the fetch without useEffect)
  // Xx: useEffect takes in a function and an array as values/arguments; the array is to set the dependencies so React can check them and run the function again; if we leave as null, React will not run useEffect again
  // Xx: did not set the unnamed function as async because useEffect should not take a function that return a promise itself; it should return nothing or a cleanup function
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }); // Xx: js function to handle HTTP requests, can be used to fetch and also send http requests
    // Xx: this is what sends the request to the backend api

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
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={crypto.randomUUID()}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

// Xx: ul is unordered list
// Xx: about the wrapper: NewPost and ul were siblings, so must be wrapped. We used the <> this time.

// Xx: if you wrap components with other components react wont know where to put the wrapped content;
// Xx: you have to tell react react where the components go using props

// Xx: modalIsVisible && -> the way js works, the code after && will only run if modalIsVisible is true, so this is a quick implementation, instead of other implementations
// Xx: the previous implementation was inputting the jsx code in a variable, which by the way, can be done

// Xx: about the posts output: if simply input {posts}, the output would be an array of pure js objects, not of JSX elements. so we need to use map
// Xx: map method takes a function that is executed for each item in the array, receiving that item and then returning the value to each it should be mapped, so we transform the item received into a JSX Post

// Xx: about key: each child in a list should have a unique key, as required by react. usually we should make it so that the key is unique, but in this case, as a quick fix, we just use post.body as the key;
// Xx: if 2 posts are made with the same body, the posts will show up initially without issues, but react may have issues later on rendering them (like omitting one)
// Xx: key is a special prop, it does not need to be passed or anything like that
// Xx: I replaced Max' solution of key={post.body} to key={Math.random()} initially; later I googled a simple unique id generator and updated it

export default PostsList;
