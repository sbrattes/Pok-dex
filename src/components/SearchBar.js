import React from 'react'
import searchIcon from '../images/search_icon.png';
import "../styles/SearchBar.css";

const SearchBar = ({handleInputChange}) => {
  return (
    <div className='searchBar'>
      <form>
        <img src={searchIcon} alt='search_icon'/>
        <input
          placeholder='Search pokemon by number or name...'
          onChange={(e) => handleInputChange(e.target.value)}
          size={38}
        />
      </form>
    </div>
  );
}

export default SearchBar;