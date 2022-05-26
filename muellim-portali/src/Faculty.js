import React from 'react';
import Select from 'react-select';
const options = [
  { value: 'İT ', label: 'İT və idarəetmə fakültəsi' },
  { value: 'Geoloji', label: 'Geoloji kəşfiyyat fakültəsi' },
  { value: 'Qaz-neft-mədən', label: 'Qaz-neft-mədən fakültəsi' },
  { value: 'Neft-mexanika', label: 'Neft-mexanika fakültəsi' },
  { value: 'Kimya-texnologiya', label: 'Kimya-texnologiya fakültəsi' }
]
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white'}),
  singleValue: base => ({
    ...base,
    color: "#fff", textAlign: "center"
  }),
  input: base => ({
    ...base,
    color: "#fff"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? 'default' : "#1A265C;",
      color: '#F4F5FC',
      cursor: isDisabled ? 'not-allowed' : 'default',
      background : isFocused ? "#9aa1bb;" : "default",
      fontWeight: "400",
      fontSize: "16px",
      textAlign : "center",
      paddingLeft : "30px",
      paddingRight : "30px",
      paddingTop : "14px",
      paddingBottom : "14px",
      borderBottom : "1px solid #E3E4EA;"

    };
  },
  placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      color: "#F4F5FC",
      textAlign: "center"
    };
  }, menuList: base => ({
    ...base,
    padding: 0
  })
};
function Faculty() {
  
  return (
    <>
     <Select style={{color:"white"}} placeholder="Fakültəni seçin" label="Single select" styles={colourStyles} options={options} />
    </>
  )
}
export default Faculty;