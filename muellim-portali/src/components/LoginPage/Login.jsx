import React from 'react';
import Input from "../RegisterPage/Input";
import FormButton from "../RegisterPage/FormButton";
import ShowAndHidePassword from "./ShowAndHidePassword";
import Select from 'react-select';
import loginLogo from "../../assets/images/loginLogo.png";
const options = [
  { value: 'Muellim ', label: 'Muellim' },
  { value: 'Dekan', label: 'Dekan' },
  { value: 'Sobe mudiri', label: 'Sobe mudiri' },
  { value: 'Prorektor', label: 'Prorektor' },
  { value: 'Rektor', label: 'Rektor' }
]
const colourStyles = {
  control: styles => ({ ...styles, '&:hover': {
    border: '1px solid #1A265A',
 
  },
  border: '1px solid #1A265A', backgroundColor: 'transparent'}),
  singleValue: base => ({
    ...base,
    color: "#1A265A",
  }),
  input: base => ({
    ...base,
    color: "#1A265A",
    padding: "13px 29px 13px 13px",
    
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? 'default' : "#F3F4FB;",
      color: '#1A265A',
      cursor: isDisabled ? 'not-allowed' : 'default',
      background : isFocused ? "#9aa1bb;" : "default",
      fontWeight: "400",
      fontSize: "16px",
      textAlign : "center",
      padding : " 14px 30px",
      borderBottom : "1px solid #E3E4EA;",
      
    };
  },
  placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      color: "#1A265A",
      textAlign: "left",
      fontSize:"14px"
    };
  }, 
  menuList: base => ({
    ...base,
    padding: 0,
  
  }),
  dropdownIndicator: base => ({
    ...base,
    color: "#38547B" 
  })
};
function Login() {
  return (
    <div className='login-page'>
      <div className="login-page-opacity"></div>
        <div className='login-platform'>
          <div className="login-platform-opacity"></div>
          <div className="login-logo">
            <img src={loginLogo} alt="Login Logo" />
          </div>
          <div className="login-header">
            <h3 className='log-head'>Müəllim Portalı</h3>
          </div>
          <div className="login-form">
            <Input inputType={"email"} placeholder={"E-mailinizi daxil edin"}/>
            <div className="password-input"><ShowAndHidePassword/></div>
            <Select placeholder="Vezifenizi secin" label="Single select" styles={colourStyles} options={options} />
            <FormButton buttonText={"Daxil olun"}/>
        </div>
      </div>
    </div>
  )
}
export default Login;