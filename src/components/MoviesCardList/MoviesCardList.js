import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  cards,handleCardLike, isSaved,handleCardDelete
}) {

  return (
    <ul
    className="card-list"
    id="card-list"
    aria-label="card-list"
  >
    {cards.map((card) => (
      <MoviesCard
        key={card.id}
        card={card}
        onCardLike={handleCardLike}
        isSaved={isSaved}
        handleCardDelete={handleCardDelete}
      />
    ))}
  </ul>

  );
}

export default MoviesCardList;
