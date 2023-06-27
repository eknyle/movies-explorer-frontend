
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";

import cardImageUrld from '../../images/picTemplate.png';


import "./App.css";



function App() {
  const [user, setUser] = useState({id: '123', name: 'Виталий', email: 'ya@ya.ru' });

  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  React.useEffect(() => {   
        setInitialCards();  
      }, [loggedIn]);

  function handleLogin() {
    setLoggedIn(true);
  }
  function setInitialCards() {
    let cards=[];
    let card={id:1, imageUrl:cardImageUrld,
      imageAlt:'33 слова о дизайне',
      movieTitle:'33 слова о дизайне',
      movieTime:'1ч 42м',
      cardLiked: false,
    };
    let card1={id:2, imageUrl:cardImageUrld,
    imageAlt:'Киноальманах «100 лет дизайна»',
    movieTitle:'Киноальманах «100 лет дизайна»',
    movieTime:'1ч 42м',
    cardLiked: false,
    };
    let card2={
      id:3,
      imageUrl:cardImageUrld,
    imageAlt:'В погоне за Бенкси',
    movieTitle:'В погоне за Бенкси',
    movieTime:'1ч 42м',
    cardLiked: true,
    };
    let card3={id:4, imageUrl:cardImageUrld,
    imageAlt:'Баския: Взрыв реальности',
    movieTitle:'Баския: Взрыв реальности',
    movieTime:'1ч 42м',
    cardLiked: true,
    };
    cards.push(card);
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);    
    setCards(cards);
    setSavedCards(cards.filter(it=>it.cardLiked===true));
  }
  function handleMoreButtonClick() {
  }
  function handleCardLike(card) {
    setCards((cards) =>
    cards.map((it)=>it.id===card.id?{
        id:card.id,
        imageUrl:card.imageUrl,
        imageAlt:card.imageAlt,
        movieTitle:card.movieTitle,
        movieTime:card.movieTime,
        cardLiked: !card.cardLiked}
      :it));
      
      setSavedCards(cards.filter(it=>it.cardLiked===true)); 
  }
  function handleEditProfile(userName, userEmail, handleLoginCallback){

  }
  function  handleCardDelete(card) {

  }
  function handleBurgerClick() {
    setIsNavigationOpen(true);
  }
  function closeNavigation() {
    setIsNavigationOpen(false);
  }
  return (  
      <div className="page">
        <Routes>
            <Route
              path="/"
              exact
              element={[
                  //о проекте              
                  <Header loggedIn={false} key="1"  onBurgerClick={handleBurgerClick} />,
                  <Main key="2"/>,
                  <Footer key="3"/>,
              ]}
            ></Route>
             <Route
              path="/movies"
              element={[
                  //фильмы             
                  <Header loggedIn={true} key="1" onBurgerClick={handleBurgerClick}/>,
                  <SearchForm key="2"/>,
                  <Movies cards={cards} handleCardLike={handleCardLike} handleMoreButton={handleMoreButtonClick} key="3" />,
                  <Footer key="4"/>,
              ]}
            ></Route>
            <Route
              path="/saved-movies"
              exact
              element={[
                  //Сохранённые фильмы           
                  <Header loggedIn={true} key="1" onBurgerClick={handleBurgerClick}/>,
                  <SearchForm key="2"/>,
                  <SavedMovies savedCards={savedCards} handleCardDelete={handleCardDelete} key="3"/>, 
                  <Footer key="4"/>,
              ]}
            ></Route>
            <Route
              path="/profile"
              element={[
                  //Аккаунт          
                  <Header loggedIn={true} key="1" onBurgerClick={handleBurgerClick}/>,
                  <Profile userName={user.name} email={user.email} onEditProfile={handleEditProfile}  key="2"/>,        
              ]}
            ></Route>
            <Route
              path="/signup"
              element={[
                  //Регистрация       
                  <Register  key="1"/>,
              ]}
            ></Route>
            <Route
              path="/signin"
              element={[
                  //Авторизация       
                  <Login  key="1"/>,
              ]}
            ></Route>
            <Route
              path="/error"
              element={[
                  //error     
                  <Error key="1"/>,
              ]}
            ></Route>            
        </Routes>
        
        <Navigation isOpen={isNavigationOpen}  onClose={closeNavigation}/>
      </div>
  );
}

export default App;
