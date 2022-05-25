import React from 'react';
function Faculty() {
  return (
    <div className="dropdown">
        <button className="custom-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" >
      Fakültəni seçin
        </button>
        <ul className="dropdown-menu dropdown-menu-dark custom-lists" aria-labelledby="dropdownMenuButton2">
            <li><a className="dropdown-item custom-list" href="#">İT və idarəetmə fakültəsi</a></li>
            <li><a className="dropdown-item custom-list" href="#">Geoloji kəşfiyyat fakültəsi</a></li>
            <li><a className="dropdown-item custom-list" href="#">Qaz-neft-mədən fakültəsi</a></li>
            <li><a className="dropdown-item custom-list" href="#">Kimya-texnologiya fakültəsi</a></li>
            <li><a className="dropdown-item custom-list" href="#">Neft-mexanika fakültəsi</a></li>
        </ul>
    </div>
 
  
  )
}
export default Faculty;