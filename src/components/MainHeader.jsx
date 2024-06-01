import { Link } from "react-router-dom";
// Xx: link is a replacement to html anchor <a></a> . it serves as a link but without refreshing the page

import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
