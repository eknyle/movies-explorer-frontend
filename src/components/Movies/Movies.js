import React, { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({cards,handleCardLike,handleMoreButton}) {

  return (
    <main className="movies" id="movies">
        <MoviesCardList cards={cards} handleCardLike={handleCardLike} />
        <button className="movies__button" type="button"
          onClick={handleMoreButton} >Ещё</button>
    </main>
  );
}

export default Movies;