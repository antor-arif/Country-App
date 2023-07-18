import React, { useEffect, useState } from 'react'

import './Countries.css'
import Country from './Country'
import Search from './Search'

const Countries = () => {


     const[country,setCountry] = useState([])
     const[search,setSearch] = useState(country)
     const[isLoading,setIsLoading] = useState(true)
     const[error,setError] = useState(null)
     
     console.log(search)

   useEffect(()=>{
    setTimeout(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>{
            if(!res.ok){
                throw("Loading Failed")
            }
            return res.json()
        })
        .then((data)=>{
            return setCountry(data),
            setSearch(data),
            setIsLoading(false),
            setError(null)
        })
        .catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })
    })
   },[])
  

     const handleSearch =(input)=>{
       
        const newInput = input.toLowerCase()
    
     const countries = country.filter((countri)=>{ 
        const newCountry = countri.name.common.toLowerCase()
        return newCountry.startsWith(newInput)
     })
          
          setCountry(countries)
     }

     const handleremove =(rmv)=>{
          const countries = country.filter((countri)=> countri.name.common != rmv
          ) 
          setCountry(countries)
     }


  return (
    <div>
        <h1>Countries App</h1>
        {isLoading && <h2 className='notification'>.........Loading Data.........</h2>}
        {error && <h2 className='notification'>{error}</h2>}
        <Search onSearch={handleSearch}/>
        <Country data={country} onRemove={handleremove}/>

    </div>
  )
}

export default Countries