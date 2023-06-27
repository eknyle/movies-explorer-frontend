import React, { useState } from "react";
function FilterCheckbox() {
  const [isChecked, setChecked] = useState(false);
  const checkboxStyle = `filter__checkbox ${ isChecked ? "checked" : ""}`;
  function handleChecked() {
    setChecked(!isChecked);
  }

  return (
    <div className="filter">
        <div className={checkboxStyle} onClick={handleChecked} ></div>
        <span className="filter__label">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
