import React, { useState } from "react";
function MoviesCard({ card, onCardLike,isSaved,handleCardDelete}) {
  
  let cardLikeStyle = `${ card.cardLiked ? "card__liked" : "card__like" }`;
  cardLikeStyle = `${ isSaved ? "card__disliked" : cardLikeStyle }`;

  function handleLikeClick() {
    if (isSaved){
        handleCardDelete(card);
    }else{
        onCardLike(card);
    }

  }
  return (
    <li className="card" id={card.id}>
      <div className="card__description">
        <h5 className="card__title">{card.movieTitle}</h5>
        <span className="card__time">{card.movieTime}</span>
        <button
          className={cardLikeStyle}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
      <img src={card.imageUrl} className="card__image" alt={card.imageAlt} />
    </li>
  );
}

export default MoviesCard;
