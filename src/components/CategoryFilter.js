import React from "react";

function CategoryFilter({ categories, currentCategory, onCategoryChange }) {
  let categorybuttons = categories.map((c) => {
    let categoryClass = c === currentCategory ? "selected" : "";
    return (
      <button
        key={c}
        onClick={() => onCategoryChange(c)}
        className={categoryClass}
        name={c}
      >
      
        {c}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categorybuttons}
    </div>
  );
}



export default CategoryFilter;