import React from 'react';
import {FaSignInAlt} from "react-icons/fa";
import logoImage from "../../assets/images/adnsu-logo.png";
function PortalHeader() {
  return (
    <div className='p-header'>
        <div className="head-logo">
            <a className='img-link' href="#" >
                <img className='logo-img' src={logoImage} alt="Logo image" />
            </a>
        </div>
        <div className="head-text">
            <h5>Müəllim Portalı</h5>
        </div>
        <div className="head-portal_back">
            <a href='#'>Mənim profilim<FaSignInAlt className='log-out'/> </a>
        </div>
    </div>
  )
}
export default PortalHeader;