import React, { useState } from 'react'

import './Country1.css'
const Country1 = (props) => {

  const [name,setName] = useState('')

 
  return (
    <div className='section'>
      <div className='card'>
        <img src={props.data.flags.png} alt="" />
        <div className='content'>
        <h2 value={name}>{props.data.name.common}</h2>
        <h3>Official Name: <span className='official'>{props.data.name.official}</span></h3>
        <h3>Capital :{props.data.capital}</h3>
        <h4>Region : {props.data.region}</h4>
        <button onClick={()=>{
          props.onRemove(props.data.name.common)
        }}>Remove Country</button>
      </div>
      </div>

      
      
    </div>
    
  )
}

export default Country1