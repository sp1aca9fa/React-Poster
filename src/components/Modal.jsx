import { useNavigate } from "react-router-dom"; // Xx: used to navigate to the starting page once pressing cancel button

import classes from "./Modal.module.css";

function Modal({ children }) {
  // Xx: curly braces is destructuring of props

  const navigate = useNavigate();
  // Xx: useNavigate is used to enable this navigate function

  function closeHandler() {
    navigate("/");
    // navigate('..') Xx: this works too, navigates to one level above
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

// Xx: per PostsList.jsx, props is to tell where the components go, as we are wrapping components with
// Xx: in this case, since we only need props.children, using destructuring to only get children and calling only children
// Xx: as opposed to other pros where we choose the name and pass it, children is a reserved prop name referring to the content passed between the opening and closing of the component
// Xx: open is another reserved prop, well to open the element; the value is usually ={true}, but if you want to set as that, you can also just add it as open./

// Xx: click is a default event and onClick is a prop we can add to set up a listener to the click event

export default Modal;
