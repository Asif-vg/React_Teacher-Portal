import React from 'react';
import { useTable, useFilters  } from 'react-table';
import {useMemo,useEffect,useState} from 'react';
import axios from "axios";
function InformationTable() {
  const [data,setData ] = useState([]);
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

const columns = useMemo(()=>[
   {Header:'Ad,Soyad,Ata adı',accessor:'name'},
   {Header:'Elmi işinin adı',accessor:'workName'},
   {Header:'Kateqoriyası',accessor:'category'},
   {Header:'Nəşr olunduğu tarix',accessor:'date'},
   {Header:'Link',accessor:'link'},
 
],[]);
useEffect(()=>{
  // fetch(" http://localhost:3001/info")
  //   .then(res =>
  //      res.json()
  //   )
  //   .then((dt) => setData(dt))
  //   .catch(console.log);
  axios.get(URL)
  .then(dt => setData(dt.data))
  .catch(console.log)
  // console.log(data);
},[])
const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({columns,data ,defaultColumn,},
  useFilters,);

  return (
    <div>
      <table {...getTableProps()}  className="table table-hover table-bordered">
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
       {rows.map(row => {
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
      {/* <table className="table table-hover table-bordered">
        <thead style={{verticalAlign:"middle"}}>
        <tr>
          <th className='table-head'>Ad,Soyad,Ata adı</th>
          <th className='table-head'>Elmi işinin adı</th>
          <th className='table-head'>Kateqoriyası</th>
          <th className='table-head'>Nəşr olunduğu tarix</th>
          <th className='table-head'>Link</th>
        </tr>
        </thead>
        <tbody  className='table-body'>
        {data.map((dt, id) => {
          
          return (
            <tr key={id}>
              <td className='table-data'>{dt.name}</td>
              <td className='table-data'>{dt.workName}</td>
              <td className='table-data'>{dt.catagory.cat}</td>
              <td className='table-data'>{dt.date}</td>
              <td className='table-data'>{dt.link}</td>
            </tr>
          )
        })}
        </tbody>
      </table> */}
    </div>
  )
}
export default InformationTable;