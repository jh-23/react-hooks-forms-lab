import React from "react";


// Need to use a value prop for this new Search input field.  
// Need to create a Search component?  
// Where does state need to be added? I think on Filter.js, ItemForm.js, ShoppingList.js, and App.js
// Set up intial state, connect that state to the input field.  Controlled input, so the input's value should always be in sync with the state
// Find a way to set state when the input changes.  Use a prop called onSearchChange as a callback
// use state value to determine which items are being displayed on the page, similar to the category dropdown


function Filter({ onCategoryChange, onSearchChange, search }) {
  return (
    <div className="Filter">
      <input type="text" value={search} name="search" placeholder="Search..." onChange={onSearchChange} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
