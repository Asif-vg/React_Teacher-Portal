import React from 'react'
import {FaRegEdit} from "react-icons/fa";
function ImgUpload({ onChange,src}) {
  return (
    <>
      <label htmlFor="photo-upload" className="custom-file-upload">
        <div className="img-wrap img-upload" >
          <img className='img-fluid'  src={src} alt=""/>
        </div>
        <input id="photo-upload" type="file" onChange={onChange} /> 
        <div className="ellipse-icon">
          <FaRegEdit />
        </div>
        {/* <span className='enter-img'>Profil şəkli əlavə et </span>  */}

    </label>

    </>
   
  )
}

export default ImgUpload;