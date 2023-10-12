import React from 'react'
import './BottleSelector.css'

function BottleSelector({handleId}) {
    
  return (
    <div className='bottles'>
  <div className='bottle-item'>
    <img src={require('../Assets/Images/0.3.png')} onClick={() => handleId(0)} alt='' />
    <p>250ml</p>
  </div>
  <div className='bottle-item'>
    <img src={require('../Assets/Images/0.33.png')} onClick={() => handleId(1)} alt='' />
    <p>300ml</p>
  </div>
  <div className='bottle-item'>
    <img src={require('../Assets/Images/1.5.png')} onClick={() => handleId(2)} alt='' />
    <p>750ml</p>
  </div>
  <div className='bottle-item'>
    <img src={require('../Assets/Images/0.5.png')} onClick={() => handleId(3)} alt='' />
    <p>1L</p>
  </div>
  <div className='bottle-item'>
    <img src={require('../Assets/Images/1.png')} onClick={() => handleId(4)} alt='' />
    <p>2L</p>
  </div>
</div>

  )
}

export default BottleSelector