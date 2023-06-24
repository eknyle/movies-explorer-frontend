import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleRegisterCallback() {
    setEmail("");
    setPassword("");
  }
  function handleRegister(e) {
    e.preventDefault();
    if (!email || !password || !name) {
      return;
    }
    onRegister(password, name, email, handleRegisterCallback);
  }
  return (
    <main className="register" id="register">
      <Link className="register__link" to="/">
        <div className="register__logo"></div>
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleRegister}>
        <p className="register__label">Имя</p>
        <input
          className="register__input register__input_type_name"
          id="userName"
          type="name"
          required
          minLength="6"
          maxLength="40"
          placeholder="Имя"
          value={name}
          onChange={handleNameChange}
        />
        <p className="register__label">E-mail</p>
        <input
          className="register__input register__input_type_email"
          id="userEmail"
          type="email"
          required
          minLength="3"
          maxLength="40"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <p className="register__label">Пароль</p>
        <input
          className="register__input"
          id="password"
          type="password"
          required
          minLength="3"
          maxLength="40"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="register__error">Что-то пошло не так...</p>
        <button
          type="submit"
          className="register__button"
          title="Зарегистрироваться"
        >
          Зарегистрироваться
        </button>
        <p className="register__description">
          Уже зарегистрированы?
          <Link className="register__link" to="/signin">
            Войти
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Register;
