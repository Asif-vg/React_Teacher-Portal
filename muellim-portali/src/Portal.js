import React from 'react';
import "./App.css"
import PortalHeader from "./PortalHeader";
import Faculty from "./Faculty";
import Depertament from "./Departamet";
// import Search from "./Search";
import InformationTable from "./InformationTable";
import Pagination from "./Pagination";

function Portal() {
  return (
      <div className="container-fluid">
          <div className="row">
            <div className='main-portal'>
              <PortalHeader/>
               <div className="manipulation">
                  <div className="fac_dep">
                    <Faculty/>
                    <Depertament/>
                  </div>
                  {/* <Search /> */}
               </div>
                <div className="custom-table">
                <InformationTable/>
                </div>
                <div className="custom-pagination">
                  <Pagination/>
                </div>
            </div>
          </div>
      </div>
    
  )
}
export default Portal;