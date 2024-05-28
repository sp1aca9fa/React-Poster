import PostsList from "./components/PostsList";

function App() {
  // Xx: the syntax of having html in js files is called jsx and thats why the files are .jsx
  // Xx: this is not supported by the browser; it is transformed under the hood
  // return <Post />;
  // Xx: even though Post is a function, we dont use as a function like you would in js, but instead use it as an html element
  // Xx: components must be called starting with a capital letter; that is the reason why it is recommended to name components with a capital letter
  // Xx: elements with a lower case are considered to be default HTML elements, so react would try to find an element with that name and fail to find it
  // Xx: it is also the reason why we should always use lower case when writing actual html code
  // Xx: restriction enforced by React: when you have multiple elements or components side by side in the code, it must be wrapped by another component/element
  // Xx: if you dont want to wrap everything in any particular element, you can simply use <></>. this is called the React fragment. It's a special component built in React.
  // Xx: if you have elements that have no content between their opening and closing tags, you may write them and close them similar to html or like below (self-closing tag), but you cant just write them without closing.
  return (
    <main>
      <PostsList />
    </main>
  );
}

export default App;
