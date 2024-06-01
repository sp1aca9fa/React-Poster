import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts, { loader as postsLoader } from "./routes/Posts";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import "./index.css";
// Xx: importing a css file would normally not work in the browser, but it is a newer feature and is transformed under the hood.

// Xx: setting up a router: 1- import RouterProvider and createBroswerRouter from react-router-dom
// Xx: 2- replace loading App component directly within <React.StrictMode></React.StrictMode> to loading RouterProvider with a router prop loading router
// Xx: 3- setting up router using CreateBrowserRouter, which takes an array of all the route definitions we want to have;
// Xx: 4- each route definition is an object with a path property and an element; element being the jsx code
// Xx: 5- add a RootLayout jsx (and creating a routes folder and importing it here) so that some elements are always imported no matter the route
// Xx: 6- RootLayout should have an array children property, and this property should have the other resources to be always loaded within this children
// Xx: 7- the path values of parent and child routes should not clash (for example, parent route should not be /"xxxx" if a child has a path of /"yyyy")
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // Xx: this gets the element with root id from the HTML and renders the react code below
  // Xx: strictMode is a feature in react which enables some additional checks and warns us of suboptimal code, including outdated code
  // Xx: adding the App as an HTML element
  // Xx: this is possible because of react components, which generally return JSX code (html inside js code; could return other code other than jsx)
  // Xx: indeed, the App file simply returns the html code for hello world
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
