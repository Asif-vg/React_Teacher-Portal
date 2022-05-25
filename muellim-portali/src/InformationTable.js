import React from 'react';
import { useTable } from 'react-table';
import {useMemo} from 'react';
function InformationTable() {

const data =  useMemo(()=>[
  { name: "Nazilə Rəhimova Əli", workName: "Turist statusun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementleri", category: "Scopus",date:"23.05.2015",link:"https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415" },
  { name: "Nazilə Rəhimova Əli", workName: "Turist statusun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementleri", category: "Scopus",date:"23.05.2015",link:"https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415" },
  { name: "Nazilə Rəhimova Əli", workName: "Turist statusun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementleri", category: "Scopus",date:"23.05.2015",link:"https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"},
  { name: "Nazilə Rəhimova Əli", workName: "Turist statusun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementleri", category: "Scopus",date:"23.05.2015",link:"https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"},
  { name: "Nazilə Rəhimova Əli", workName: "Turist statusun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementleri", category: "Scopus",date:"23.05.2015",link:"https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"},
  { name: "Nazilə Rəhimova Əli", workName: "Turist statusun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementleri", category: "Scopus",date:"23.05.2015",link:"https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"},
  { name: "Nazilə Rəhimova Əli", workName: "Turist statusun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementleri", category: "Scopus",date:"23.05.2015",link:"https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415"},
],[])
const columns = useMemo(()=>[
   {Header:'Ad,Soyad,Ata adı',accessor:'name'},
   {Header:'Elmi işinin adı',accessor:'workName'},
   {Header:'Kateqoriyası',accessor:'category'},
   {Header:'Nəşr olunduğu tarix',accessor:'date'},
   {Header:'Link',accessor:'link'},
 
],[]);
const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({columns,data})
  return (
    <table {...getTableProps()}  className="table table-hover table-bordered">
      <thead style={{verticalAlign:"middle"}}>
        {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className='table-head'>{column.render('Header')}</th>
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
  
  )
}
export default InformationTable;