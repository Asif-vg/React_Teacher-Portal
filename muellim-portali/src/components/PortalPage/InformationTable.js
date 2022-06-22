import React from 'react';
import { useTable, useFilters,usePagination  } from 'react-table';
import {useMemo,useEffect,useState} from 'react';
import axios from "axios";
import {FaAngleLeft,FaAngleRight,FaAngleDoubleRight,FaAngleDoubleLeft} from 'react-icons/fa';
function InformationTable() {

  const [data,setData ] = useState([]);
  const columns = useMemo(()=>[
    {Header:'Ad,Soyad,Ata adı',accessor:'name'},
    {Header:'Elmi işinin adı',accessor:'workName'},
    {Header:'Kateqoriyası',accessor:'category'},
    {Header:'Nəşr olunduğu tarix',accessor:'date'},
    {Header:'Link',accessor:'link'},
  
 ],[]);
  const URL = "http://localhost:3001/info";
  function TextFilter({
    column: { filterValue, preFilteredRows, setFilter },
   }) {
    const count = preFilteredRows.length
    return (
      <input
      style={{border:"none",outline:"none",fontSize:"12px"}}
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value.toLowerCase() || undefined)
        }}
        placeholder={`Search ${count} records...`}
      />
    )
  }
const defaultColumn = useMemo(
    () => ({
      Filter: TextFilter,
    }),
    []
)
const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,  page,
  pageOptions,
  state: { pageIndex},
  previousPage,
  nextPage,gotoPage,
  pageCount,
  canPreviousPage,
  canNextPage,} = useTable({columns,data ,defaultColumn,initialState: { pageSize: 5 },},useFilters, usePagination,);
useEffect(()=>{
  axios.get(URL)
  .then(dt => setData(dt.data))
  .catch(console.log)
},[])

  return (
    <>
      <table {...getTableProps()}  className="table table-hover table-bordered mb-8">
        <thead style={{verticalAlign:"middle"}}>
          {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} className='table-head'>{column.render('Header')}
                    <div style={{marginTop:"15px"}}>{column.canFilter ? column.render('Filter') : null}</div></th>
                  ))}
                </tr>
              ))}
        </thead>
        <tbody className='table-body' {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                        return <td {...cell.getCellProps()} className='table-data'>{cell.render('Cell')}</td>
                      })}
                </tr>
              )
            })}
            
        </tbody>
   </table>  
    <div className='custom-pagination'>
      <ul className='pagination-lists'>
          <div className="page-nav">
            <li className='pagination-list'><a className='custom-navigation '  onClick={() => gotoPage(0)} disabled={!canPreviousPage}> <FaAngleDoubleLeft/></a></li>{' '}
            <li className='pagination-list'><a className='custom-navigation ' onClick={() => previousPage()} disabled={!canPreviousPage}><FaAngleLeft/></a></li>{' '}
            <li className='pagination-list'><a className='custom-navigation 'onClick={() => nextPage()} disabled={!canNextPage}><FaAngleRight/></a></li>{' '}
            <li className='pagination-list'><a className='custom-navigation ' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}> <FaAngleDoubleRight/></a></li>
            <span className='current-page'>
              Səhifə{' '}
              <strong style={{marginLeft:"5px"}}>
                {pageIndex + 1} / {pageOptions.length}
              </strong>{' '}
            </span>
            <div className="input_enter-nav">
            <label htmlFor="" className='page_nav-title'>Səhifəyə get {' '}</label>
            <div className="input_enter">
              <input type='number'
                  // defaultValue={pageIndex + 1}
                  onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                  }} className='enter-page' />
            </div>   
            </div>
          </div>
      </ul>
    </div> 
    </>
  )
}
export default InformationTable;