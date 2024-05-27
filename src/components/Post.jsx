const names = ["Maximilian", "Manuel"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  // Xx: Files which have a React content commonly have the file name starting with a capital letter
  // Xx: starting the function name with the capital letter and return jsx codes is what turns a common function into a React Component
  // Xx: functions in react can still run js code normally, but it is important to always return jsx code
  return (
    <div>
      <p>{chosenName}</p>
      <p>React.js is awesome!</p>
    </div>
  );
}

// Xx: code inside curly braces will be executed and the result will be outputted

// Xx: to start using the component, commonly we would call the component from within the root component, in this cause app.jsx (per code in main.jsx)
export default Post;
