import React from 'react';
import "../../../src/App.css"
import PortalHeader from "./PortalHeader";
import Faculty from "./Faculty";
import Depertament from "./Departamet";
import InformationTable from "./InformationTable";
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
              </div>
                <div className="custom-table">
              <InformationTable/>
              </div> 
          </div>
        </div>
    </div>
  )
}
export default Portal;