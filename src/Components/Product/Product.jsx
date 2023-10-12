import React from 'react'
import './Product.css'

function Product({data}) {
  return (
    <div className='Product'>
        <img src={data.img} className='bottle' alt='product'></img>
        <img src={require("../Assets/Images/scale.png")} className='scale' alt=''></img>
    </div>
  )
}

export default Product