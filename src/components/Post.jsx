import classes from "./Post.module.css"; // Xx: how to import .module.css files
// import styles from "./Post.module.css"; Xx: could be written like this too

function Post(props) {
  // Xx: Files which have a React content commonly have the file name starting with a capital letter
  // Xx: starting the function name with the capital letter and return jsx codes is what turns a common function into a React Component
  // Xx: functions in react can still run js code normally, but it is important to always return jsx code

  // Xx: props: react allows you to pass your own attributes to the components, this is called "props", as such we make it so that Post accepts the props object
  // Xx: no matter the name used in parenthesis, we get the props collection in this function if we call something, like we're doing here with props
  return (
    // Xx: although not typically used, you can add inline styles by adding the style attribute within the element, example <div style={{color: 'red', textAlign: 'left'}}
    // Xx: doing so requires 2 curly braces, one for passing dynamic attributes and the other because style must be passed as an
    // Xx: dash ( - ) is not allowed in plain property/variable names, so it becomes textAlign instead of text-align

    // Xx: className is used instead of class; although this looks like html code, it is actually js and some attributes in js have different names from html
    // Xx: css class names are added using className, not class

    // Xx: to complete the style of post, added the style of a .post element in the css file.
    // Xx: alternatively, we added the post style to file Post.module.css, which is an approach accepted by Vite or Create React App, to scope down the styles only posts below, not set global formatation to all post elements
    // Xx: the Post.module.css file generally should be close to the Post file, but it is not necessarily a requirement.
    // Xx: the file name though is required to follow this structure, Post.module.css

    // Xx: about the import: getting styles for .post element from classes (i.e., Post.module.css)
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}

// Xx: code inside curly braces will be executed and the result will be outputted

// Xx: to start using the component, commonly we would call the component from within the root component, in this cause app.jsx (per code in main.jsx)
export default Post;
