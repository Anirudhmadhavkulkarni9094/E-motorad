import React from 'react'
import ChartCard from './ChartCard'
import './Chart.css'

function Chart({data}) {
  return (
    <div className='Chart'>
        <h5>Nutrition Facts</h5>
        <div className='w-100 m-auto'>
        <ChartCard data= {data}></ChartCard>
        </div>
        <div className='Disclaimer'>
            <p>Not a significant source of other nutrients.</p>
            <p>*Percent Daily Values are based on a 2,000 calorie diet</p>
        </div>
        <button className='btn btn-outline-light Buy-now'>BUY NOW</button>
    </div>
  )
}

export default Chart