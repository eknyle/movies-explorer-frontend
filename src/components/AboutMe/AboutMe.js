import { Link } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import aboutImagePath from '../../images/photoMy.jpg';

function AboutMe() {
  return (
    <section className="about" aria-label="about">
      <div className="about__container">
        <h2 className="about__subheader">Студент</h2>
        <div className="about__line"></div>
        <img
          src={aboutImagePath}
          className="about__image"
          alt="Фото студента"
        />
        <h3 className="about__title">Елена</h3>
        <p className="about__subtitle">
          Фронтенд&#8209;разработчик,&#160;35&#160;лет
        </p>
        <p className="about__description">
          Я родилась в городе Белгороде, живу в городе Санкт-Петербург,
          закончила физико-математический факультет БелГУ (Белгородский
          государственный исследовательский университет). Увлекаюсь бегом,
          чтением профессиональной литературы и самообразованием, как в
          профессиональной сфере, так и в области изучения иностранных языков
          (английский, немецекий, греческий). В течении 5 лет работала
          бэкенд-разработчиком в стеке .Net. В 2022 решила сменить стек и прошла
          курс по веб-разработке.
        </p>
        <Link
          className="about__link"
          to="https://github.com/eknyle"
          target="_blank"
        >
          Github
        </Link>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
