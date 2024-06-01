import { Outlet } from "react-router-dom";

import PostsList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

// Xx: creating a loader functio to pass when loading the Posts jsx;
// Xx: it should be run by property "loader" in the main.jsx within the router, which runs a function that may be async or sync;
// Xx: we are creating the function here to simply just run it there;
// Xx: if async function, react will await promises resolve before loading the component
// Xx: React will make the data from this function available to the component above and other components within

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
