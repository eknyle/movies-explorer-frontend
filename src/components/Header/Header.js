import { Link } from "react-router-dom";

function Header({ onBurgerClick, loggedIn }) {
  const authorizedListClass = `header__list ${
    loggedIn ? "header__list_authorized" : "header__list_disabled"
  }`;
  const unauthorizedListClass = `header__list ${
    loggedIn ? "header__list_disabled" : ""
  }`;
  const containerClass = `header__container ${
    loggedIn ? "header__container_authorized" : ""
  }`;
  const headerClass = `header ${loggedIn ? "header_authorized" : ""}`;
  const linkClass = `header__link ${loggedIn ? "header__link_authorized" : ""}`;
  const burgerClass = `${
    loggedIn ? "header__burger" : "header__burger header__burger_disabled"
  }`;

  return (
    <header className={headerClass}>
      <div className={containerClass}>
        <Link className="header__link" to="/">
          <div className="header__logo"></div>
        </Link>
        <ul className={authorizedListClass}>
          <li className="header__list-item">
            <Link className={linkClass} to="/movies">
              Фильмы
            </Link>
          </li>
          <li className="header__list-item">
            <Link className={linkClass} to="/saved-movies">
              Сохраненные&#160;фильмы
            </Link>
          </li>
        </ul>
        <ul className={authorizedListClass}>
          <li className="header__list-item header__list-item_authorized">
            <Link className="header__link-profile" to="/profile">
              Аккаунт<div className="header__profile"></div>
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className={burgerClass}
          onClick={onBurgerClick}
        ></button>
        <ul className={unauthorizedListClass}>
          <li className="header__list-item">
            <Link className={linkClass} to="/signup">
              Регистрация
            </Link>
          </li>
          <li className="header__list-item">
            <button className="header__button" onClick="/signin">
              Войти
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
