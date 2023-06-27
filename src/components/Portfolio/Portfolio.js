import { Link } from "react-router-dom";
import strelkaImagePath from '../../images/strelka.svg';

function Portfolio() {
  return (
    <>
      <h4 className="about__portfolio-title">Портфолио</h4>
      <ul className="about__list">
        <li className="about__list-item">
          <Link
            to="https://github.com/eknyle/how-to-learn"
            className="about__list-link" target="_blank"
          >
            Статичный&#160;сайт
            <img
            src={strelkaImagePath}
            className="about__list-image"
            alt="стрелка"
          />
          </Link>          
        </li>
        <li className="about__list-item">
          <Link
            to="https://github.com/eknyle/russian-travel"
            className="about__list-link"
            target="_blank"
          >
            Адаптивный&#160;сайт
            <img
            src={strelkaImagePath}
            className="about__list-image"
            alt="стрелка"
          />
          </Link>          
        </li>
        <li className="about__list-item">
          <Link
            to="https://mesto.eknyle.nomoredomains.monster/signin"
            className="about__list-link"
            target="_blank"
          >
            Одностраничное&#160;приложение
            <img
            src={strelkaImagePath}
            className="about__list-image"
            alt="стрелка"
          />
          </Link>          
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
