import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

// Xx: htmlFor is replacing the for html attribute, one of those cases where the html attribute is different from the js one
// Xx: className (as opposed to class in html) and htmlFor (as opposed to for in html) are the 2 main deviations between html and js that we commonly see

export default NewPost;
