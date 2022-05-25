import React from 'react';
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="search-box">
     <input className='search-input' type="text" placeholder='Axtar...'   />
     <div className="search-icon">
      <a href="" className='loop-icon'>
        <FaSearch/>
      </a>
     </div>
    </div>
  )
}
export default Search;