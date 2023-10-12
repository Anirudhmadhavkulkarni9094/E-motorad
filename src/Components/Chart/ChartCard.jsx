import React from 'react'
import './Chart.css'

function ChartCard({data}) {
  return (
    <div className='ChartCards'> 
        <div className='ChartCard'>
            <h5>Amount Per server</h5>
            <h3>{data.amountPerServe}<span>Cal</span></h3>
            <p>{data.amountPerServe/10}%</p>
        </div>
        <div className='ChartCard'>
            <h5>Total Carbo hyderate</h5>
            <h3>{data.carbohydrate}g</h3>
            <p>Percent</p>
        </div>
        <div className='ChartCard'>
            <h5>Sodium</h5>
            <h3>{data.sodium}mg</h3>
            <p>Percent</p>
        </div>
        <div className='ChartCard'>
            <h5>Protiens</h5>
            <h3>{data.protein}g</h3>
            <p>Percent</p>
        </div>
        
    </div>
  )
}

export default ChartCard