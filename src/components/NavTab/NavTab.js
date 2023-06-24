import { Link } from "react-router-dom";

function NavTab({handleClose}) {
  return (
    <div  className="navtab">
      <ul className="navtab__list" id="navtab">
        <li className="navtab__item">
          <Link className="navtab__link" to="/" onClick={handleClose} >
            Главная
          </Link>
        </li>
        <li className="navtab__item">
          <Link className="navtab__link" to="/movies" onClick={handleClose} >
            Фильмы
          </Link>
        </li>
        <li className="navtab__item">
          <Link className="navtab__link" to="/saved-movies" onClick={handleClose} >
            Сохраненные фильмы
          </Link>
        </li>
        <li className="navtab__item">
            <Link className="navtab__link navtab__link_type_profile" to="/profile" onClick={handleClose} >
              Аккаунт<div className="navtab__profile"></div>
            </Link>
          </li>
      </ul>
    </div>
  );
}

export default NavTab;
