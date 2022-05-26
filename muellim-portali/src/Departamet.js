import React from 'react';
import Select from 'react-select';
const options = [
  { value: 'Elektromexanika və avtomatika ', label: 'Elektromexanika və avtomatika' },
  { value: 'Kompüter mühəndisliyi', label: 'Kompüter mühəndisliyi' },
  { value: 'Cihaz mühəndisliyi', label: 'Cihaz mühəndisliyi' },
  { value: 'Ümumi və tətbiqi riyaziyyat', label: 'Ümumi və tətbiqi riyaziyyat ' }
]
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white'}),
  singleValue: base => ({
    ...base,
    color: "#fff",
    textAlign: "center"
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
function Departamet() {
  
  return (
    <>
    <Select placeholder="Kafedranı seçin"  label="Single select" styles={colourStyles} options={options}  />
  </>
  )
}
 
export default Departamet;