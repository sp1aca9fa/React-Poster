import { Link, Form, redirect } from "react-router-dom";

import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

// Xx: because we need to change an element that is not in NewPost, we lifted the state up to PostsList, passed in props from PostsLists to receive the new values and apply when onChange event listener is triggered

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <button>Submit</button>
          <Link to="/" type="button">
            Cancel
          </Link>
        </p>
      </Form>
    </Modal>
  );
}

// Xx: htmlFor is replacing the for html attribute, one of those cases where the html attribute is different from the js one
// Xx: className (as opposed to class in html) and htmlFor (as opposed to for in html) are the 2 main deviations between html and js that we commonly see

// Xx: states: react allows us to manipulate states (for example, the text of an object at a certain point is a certain state and if we update that text, its a different state)
// Xx: we can use this state manipulation feature to update the text in our components
// Xx: to do this we have to register the state and set up an eventlistener to tell react to update the state whenever we type somewhere else

// Xx: how you would handle in vanilla js: document.querySelector('textarea').addEventListener('change', function () {})
// Xx: vanilla js is an imperative structure, you tell the code to listen to the element; react is a declarative structure, so you declare that a certain element has an event listener
// Xx: we use changeBodyHandler and not changeBodyHandler(), because we dont execute the function, we just use the function name to get its value

// Xx: the component function is executed only once, the first time its loaded in the page.
// Xx: as such, if we want a variable to cause UI updates, we need to use a react hook called useState (there a bunch of different react hooks starting with use; they're basically just js functions from the react library)
// Xx: you must execute hook functions in react component functions; they cant be used inside regular js functions
// Xx: these hook functions usually change something about the component they're used into or regarding how React behaves with that component
// Xx: state value can be anything, an object, a number, an array, a string..
// Xx: useState takes 2 arguments, the initial value and the value you want it to be and it returns an array that always has 2 elements
// Xx: the first element is current state value; the second element is a state updating function, a function that you can execute to assign a new value to the state
// Xx: once we call that state updating function React will execute the component function again (thus updating the state)
// Xx: react hooks compare the snapshots (before and after change) and only change update portions of the code, instead of reloading everything, which would be too performance intensive

// Xx: about the buttons: when buttons are added to a form they automatically have functionality to send the form with HTML request;
// Xx: first we stop the cancel button by changing its type to 'button', instead of the default 'submit', so it wont submit the form
// Xx: then we need to stop the html request from the submit button as well, so we can handle the submission with react

export default NewPost;

export async function action({ request }) {
  // Xx: destructuring of the data object automatically received when running this function
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Xx: const response may be used to handle errors; not implemented; may also simply remove "const response" from above and just await fetch

  return redirect("/");
}
