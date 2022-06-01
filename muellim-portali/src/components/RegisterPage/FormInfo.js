import React from 'react'
import  Input  from "./Input";
import Ellipse from "./Ellipse";
import FormButton from "./FormButton";
function Information() {
  return (
    <div className='container-fluid custom-container'>
      <div className='info'>
        <div className='top-bg'> </div>
        <div className="info-box">
            {/* Profile image enter */}
           <Ellipse/> 
            {/* Information form enter */}
           <form >
           <div className='custom-inputs'>
              <div className="inputs">
                  <Input inputType={"text"} placeholder={"Ad və soyadiniz"}/>
                  <Input inputType={"text"} placeholder={"Vəzifəniz"}/>
                  <Input inputType={"text"} placeholder={"Elmi dərəcəniz"}/>
                  <textarea cols="30" rows="3" className='textarea'  placeholder='Tədqiqat sahəniz(maksimum 50 simvol)'></textarea>
                  <Input inputType={"email"} placeholder={"Elektron poçt ünvanınız"}/>
      
              </div>
              </div>
                {/* Information submit button */}
             <FormButton buttonText="Yadda saxla və Davam et"/>
           </form>
         
        </div>

    </div>
    </div>
  )
}
export default Information;