import React from 'react'
import Country1 from './Country1'
import './Country.css'

const Country = (props) => {
  
  const {onRemove} = props;
  
  return (
    
      <section className='bg'>
        {
        props.data.map((country)=> <Country1 key={country.name.common} data={country} onRemove={onRemove} />)
        }
      </section>
    
  )
}

export default Country