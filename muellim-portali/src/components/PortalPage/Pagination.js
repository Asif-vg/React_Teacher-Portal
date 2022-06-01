import React from 'react'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
function Pagination() {
  return (
    <ul className='pagination-lists'>
      <div className="page-nav">
        <li className='pagination-list'><a className='custom-navigation direction' href="#"><FaAngleLeft/></a></li>
        <li className='pagination-list'><a className='custom-navigation active' href="#">1</a></li>
        <li className='pagination-list'><a className='custom-navigation' href="#">2</a></li>
        <li className='pagination-list'><a className='custom-navigation' href="#">3</a></li>
        <li className='pagination-list'><a className='custom-navigation' href="#">...</a></li>
        <li className='pagination-list'><a className='custom-navigation' href="#">32</a></li>
        <li className='pagination-list'><a className='custom-navigation direction' href="#"><FaAngleRight/></a></li>
      </div>
      <div className="input_enter-nav">
        <label htmlFor="" className='page_nav-title'>Sehifeye get</label>
        <div className="input_enter">
         <input type="number" className='enter-page' />
        </div>
        <a className='go-page' href="#">Get<FaAngleRight/></a>
      </div>
    </ul>
  )
}
export default Pagination;