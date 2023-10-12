import React from 'react'
import './Intro.css'

function Intro({data}) {
  return (
    <div className='intro-Container'>
        <h1>{data.title}</h1>
        <p>Carbonated water, High fructose , corn syrup, Caramel color, sugar, Phosphoric acid, Caffeien, Citric acid, Natural flavor</p>
    </div>
  )
}

export default Intro