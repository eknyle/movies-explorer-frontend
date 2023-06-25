import React, { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({savedCards,handleCardDelete}) {

  return (
    <main className="saved-movies" id="saved-movies">
        <MoviesCardList cards={savedCards}  isSaved="true"  handleCardDelete={handleCardDelete}/>
    </main>
  );
}

export default SavedMovies;