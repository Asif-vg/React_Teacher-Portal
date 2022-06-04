import React from 'react'
// import {useNavigate} from "react-router-dom"

function FormButton({buttonText}) {
  // const navigate = useNavigate();
  return (
    <div className='info-button'>
      <button  type='submit' className='form-button login-button'><span className='button-in'>{buttonText}</span></button>
      {/* onClick={()=>navigate("/login")} */}
    </div>
  )
}
export default FormButton;