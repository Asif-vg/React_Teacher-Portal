import React, {useRef,useState } from 'react'
import {FaRegEdit} from "react-icons/fa";

function Ellipse() {
  const profileRef = useRef();
  const [view,setView]=useState(true);
  const [upload,setUpload] = useState({ file: ''}) 
  const {imagePreviewUrl} = upload;

  function handleChangeImg(e){
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setUpload({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);

    if(profileRef.current.value.length > 0){
      if(view){
        setView(!view)
      }
    }
    
  }
  return (
    <>
    <label htmlFor="photo-upload" className="custom-file-upload">
      <div className="img-wrap img-upload" >
        <img className='img-fluid'  src={imagePreviewUrl} alt=""/>
      </div>
      <input id="photo-upload" type="file"  ref={profileRef} onChange={(e)=>handleChangeImg(e)}/> 
      <div className="ellipse-icon">
        <FaRegEdit />
      </div>
      {
        view ? <span className='enter-img'>Profil şəkli əlavə et </span> : ""
      } 
    </label>
  </>
  )
}
export default Ellipse;