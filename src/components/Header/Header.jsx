import ls from "./Header.module.css";

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
        <a className={ls.book} href="#">
          <img className={ls.img} src="images/book.svg" alt="book" />
          <span className={ls.inbook}>{counter}</span>
        </a>
      </div>
    </div>
  );
};
