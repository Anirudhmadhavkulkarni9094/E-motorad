import React from 'react'

function InfoCard({data}) {
  return (
    <div className='InfoCard'>
      <div className='data'>
      <h1>{data.capacity}</h1>
        <h5>Serving size</h5>
        <p>{data.servings} serving</p>
        <p>per Container</p>
      </div>
        
    </div>
  )
}

export default InfoCard