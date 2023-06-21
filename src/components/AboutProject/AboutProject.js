
function AboutProject() {

  return (
    <section className="about-project" aria-label="about-project">
        <div className="about-project__container">
          <h2 className="about-project__subheader">О проекте</h2>
          <div className="about-project__line"></div>
          <div className="about-project__list">
            <div className="about-project__list-item">
              <h3 className="about-project__header">Дипломный&#160;проект&#160;включал&#160;5&#10;&#13;этапов
              </h3>
              <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </div>
            <div className="about-project__list-item">
              <h3 className="about-project__header">На&#160;выполнение&#160;диплома&#160;ушло&#160;5&#10;&#13;недель
              </h3>
              <p className="about-project__description">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>
          <div className="about-project__schema">
            <div className="about-project__back">1 неделя</div>
            <div className="about-project__front">4 недели</div>
          </div>
          <div className="about-project__schema">
            <span className="about-project__back-subtitle">Back&#8209;end</span>
            <span className="about-project__front-subtitle">Front&#8209;end</span>
          </div>
        </div>
      </section>
  );
}

export default AboutProject;


