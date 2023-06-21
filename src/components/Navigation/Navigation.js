import NavTab from "../NavTab/NavTab";

function Navigation({  isOpen, onClose }) {
    const openedClassName = `${isOpen ? "navigation-popup_opened" : ""}`;
    return (
      <section
        className={`navigation-popup ${openedClassName}`}
        id="navigation-popup"
        aria-label="navigation-popup"
      >
        <div className="navigation-popup__container">
          <button
            className="navigation-popup__close"
            id="navigation-popup__close"
            aria-label="Закрыть"
            type="button"
            onClick={onClose}
          ></button>
          <NavTab handleClose={onClose} />
        </div>
      </section>
    );
  }
  
  export default Navigation;
  