import React, { useState } from 'react'
import ImgUpload from "./ImgUpload";

function Ellipse() {
  const [upload,setUpload] = useState({ file: ''}) 
  const photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setUpload({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  const {imagePreviewUrl} = upload;
  return (
    <>
    {(
      <ImgUpload onChange={photoUpload} src={imagePreviewUrl}/>
    )}
  </>
  )
}
export default Ellipse;