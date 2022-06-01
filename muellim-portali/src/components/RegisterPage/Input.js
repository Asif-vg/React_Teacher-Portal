import React from 'react'

function Input({placeholder,inputType}) {
  return (
      <input type={inputType} className='form-input login-input'  placeholder={placeholder}/>
  )
}
export default Input;