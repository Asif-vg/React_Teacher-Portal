import React from 'react'

function Departamet() {
  return(
      <div className="dropdown">
        <button className="custom-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" >
            Komputer mühəndisliyi
        </button>
        <ul className="dropdown-menu dropdown-menu-dark custom-lists" aria-labelledby="dropdownMenuButton2">
            <li><a className="dropdown-item custom-list" href="#">Elektromexanika və avtomatika</a></li>
            <li><a className="dropdown-item custom-list" href="#">Kompüter mühəndisliyi</a></li>
            <li><a className="dropdown-item custom-list" href="#">Cihaz mühəndisliyi</a></li>
            <li><a className="dropdown-item custom-list" href="#">Ümumi və tətbiqi riyaziyyat</a></li>
        </ul>
    </div>
  )
}
 
export default Departamet;