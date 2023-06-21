import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleLoginCallback() {
    setEmail("");
    setPassword("");
  }
  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password ) {
      return;
    }
    onLogin(password,  email, handleLoginCallback);
  }
  return (
    <main className="login" id="login">
      <div className="login__logo"></div>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleLogin}>
        <p className="login__label">E-mail</p>
        <input
          className="login__input login__input_type_email"
          id="userEmail"
          type="email"
          required
          minLength="3"
          maxLength="40"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <p className="login__label">Пароль</p>
        <input
          className="login__input"
          id="password"
          type="password"
          required
          minLength="3"
          maxLength="40"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="login__error">Что-то пошло не так...</p>
        <button
          type="submit"
          className="login__button"
          title="Войти"
        >
          Войти
        </button>
        <p className="login__description">
          Ещё не зарегистрированы?
          <Link className="login__link" to="/signup">
            Войти
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
