import React, { useEffect, useState } from 'react'

import './Search.css'

const Search = (props) => {

   const [input,setInput] = useState('')
     const handleChange=(e)=>{
        setInput(e.target.value)
        
        
     }
     useEffect(()=>{
        props.onSearch(input)
     },[input])
  return (
    <div className='search'>
            <label htmlFor="search"></label>
            <input type="text" placeholder='Search countries' className='input' value={input} onChange={handleChange} />
        
        
    </div>
  )
}

export default Search