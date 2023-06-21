
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  
  return (
    <form className="search-form">
        <div className="search-form__container">
            <div className="search-form__find-image"></div>
            <input className="search-form__input" placeholder="Фильм" >                
            </input>
            <button className="search-form__submit" type="submit"></button>
            <FilterCheckbox />
        </div>
        <div className="search-form__bottom-border"></div>       
    </form>
  );
}

export default SearchForm;
