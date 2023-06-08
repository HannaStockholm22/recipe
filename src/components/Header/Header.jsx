
import ls from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = ({ counter }) => {
 
  return (
    <div className="container">
      <div className={ls.top}>
        <a className={ls.logo} href="#">
          <img className={ls.img} src="images/logo.svg" alt="logo" />
        </a>
        <a className={ls.logo} href="#">
          <p className={ls.title}> My recipes</p>
        </a>
        <button className={ls.book} >
          <NavLink className={(navData) => (navData.isActive ? ls.active : ls.link)} to="fromBook" >
            <img className={ls.img} src="images/book.svg" alt="book" />
            <span className={ls.inbook}>{counter}</span>
          </NavLink>
        </button>
      </div>
    </div>
  );
};
