import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  // Xx: curly braces is destructuring of props
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
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
