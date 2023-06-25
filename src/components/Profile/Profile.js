import React, { useState } from "react";

function Profile({ userName, email, onEditProfile }) {
  const [isEdit, setEdit] = useState(false);
  const [userEmail, setEmail] = useState(email);
  const [name, setUserName] = useState(userName);
  const [onEditProfileError, setOnEditProfileError] = useState("");

  const editButtonStyle = `profile__edit-button ${
    isEdit ? "profile__edit-button_disabled" : ""
  }`;
  const saveButtonStyle = `profile__save-button ${
    isEdit ? "" : "profile__save-button_disabled"
  }`;

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleNameChange(e) {
    setUserName(e.target.value);
  }
  function handleLoginCallback(error) {
    setOnEditProfileError(error);
  }
  function handleEditProfile(e) {
    e.preventDefault();

    if (!userEmail || !userName) {
      return;
    }
    onEditProfile(name, userEmail, handleLoginCallback);
  }
  function handleStartEdit(e) {
    setEdit(true);
  }
  function handleLogout(e) {
    e.preventDefault();
  }

  return (
    <section className="profile" id="profile">
      <h2 className="profile__title">Привет, {name}</h2>
      <form className="profile__form" onSubmit={handleEditProfile}>
        <label className="profile__label profile__label_type_name">Имя</label>
        <input
          className="profile__input profile__input_type_name profile__input_disabled"
          id="userName"
          required
          minLength="6"
          maxLength="40"
          placeholder="Имя"
          value={name}
          onChange={handleNameChange}
        />
        <div className="profile__line"></div>
        <label className="profile__label profile__label_type_email">
          E-mail
        </label>
        <input
          className="profile__input profile__input_type_email  profile__input_disabled"
          id="userEmail"
          type="email"
          required
          minLength="3"
          maxLength="40"
          placeholder="E-mail"
          value={userEmail}
          onChange={handleEmailChange}
        />
        <span className="profile__error">{onEditProfileError}</span>
        <button type="submit" className={saveButtonStyle} title="Сохранить">
          Сохранить
        </button>
        <button
          type="submit"
          className={editButtonStyle}
          title="Редактировать"
          onClick={handleStartEdit}
        >
          Редактировать
        </button>
        <button
          type="submit"
          className="profile__logout-button"
          title="Выйти из аккаунта"
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
