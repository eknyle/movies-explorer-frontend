import { Link } from "react-router-dom";

function Footer() {
  return (
<footer className="footer">
  <div className="footer__container">
    <p className="footer__subheader">
      Учебный&#160;проект&#160;Яндекс.Практикум&#160;х&#160;BeatFilm.
    </p>
    <div className="footer__line"></div>
    <ul className="footer__list">
      <li className="footer__list-item footer__list-item_copy">
        &copy;&nbsp;2023
      </li>
      <li className="footer__list-item">
        <Link className="footer__link" to="https://practicum.yandex.ru/">
          Яндекс.Практикум
        </Link>
      </li>
      <li className="footer__list-item">
        <Link className="footer__link" to="https://github.com/eknyle">
          Github
        </Link>
      </li>
    </ul>
  </div>
</footer>
  );
}

export default Footer;


