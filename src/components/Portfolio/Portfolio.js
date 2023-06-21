import { Link } from "react-router-dom";
import strelkaImagePath from '../../images/strelka.png';

function Portfolio() {
  return (
    <>
      <h4 class="about__portfolio-title">Портфолио</h4>
      <ul class="about__list">
        <li class="about__list-item">
          <Link
            to="https://github.com/eknyle/how-to-learn"
            className="about__list-link"
          >
            Статичный&#160;сайт
          </Link>
          <img
            src={strelkaImagePath}
            className="about__list-image"
            alt="стрелка"
          />
        </li>
        <li class="about__list-item">
          <Link
            to="https://github.com/eknyle/russian-travel"
            className="about__list-link"
            target="_blank"
          >
            Адаптивный&#160;сайт
          </Link>
          <img
            src={strelkaImagePath}
            className="about__list-image"
            alt="стрелка"
          />
        </li>
        <li class="about__list-item">
          <Link
            to="https://mesto.eknyle.nomoredomains.monster/signin"
            className="about__list-link"
            target="_blank"
          >
            Одностраничное&#160;приложение
          </Link>
          <img
            src={strelkaImagePath}
            className="about__list-image"
            alt="стрелка"
          />
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
