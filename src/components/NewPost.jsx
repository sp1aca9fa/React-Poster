import { useState } from "react";
import classes from "./NewPost.module.css";

// Xx: because we need to change an element that is not in NewPost, we lifted the state up to PostsList, passed in props from PostsLists to receive the new values and apply when onChange event listener is triggered

function NewPost({ onCancel, onAddPost }) {
  // Xx: destructuring useState (assigning the 2 elements of the array that will result from useState to save them to different constants), common practice
  // Xx: it is a convention to generally use the first element of the destructuring of useState as the element we want to update and the function as set-element-we-want-to-update, such as above

  // function changeBodyHandler(event) {
  // Xx: Max suggests using handler at the end of the name of the function if we plan to assign it to an event listener
  // Xx: we will automatically get an event object when using addeventlistener, including info such as the event target (in this case, the textarea) and the value
  // setEnteredBody(event.target.value);
  // Xx: need to call the state updating function passing the new value as a value for the function
  // }

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  // Xx: similar to other functions called with an event listener, it gets the properties of the event
  function submitHandler(event) {
    event.preventDefault(); // Xx: prevents the browser default of generating and sending an HTTP request
    // Xx: could add some data checkers here that would update the state in case the data is invalid
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel(); // Xx: to close the modal after the post is submitted
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button>Submit</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </p>
    </form>
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
