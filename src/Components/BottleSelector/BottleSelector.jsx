import React, { useState } from 'react';
import './BottleSelector.css';

function BottleSelector({ handleId }) {
  const [selectedBottle, setSelectedBottle] = useState(null);

  const handleImageClick = (bottleId) => {
    setSelectedBottle(bottleId);
    handleId(bottleId);
  };

  return (
    <div className='bottles'>
      <div className={`bottle-item ${selectedBottle === 0 ? 'white' : ''}`}>
        <img
          src={require('../Assets/Images/0.3.png')}
          onClick={() => handleImageClick(0)}
          alt=''
        />
        <p>250ml</p>
      </div>
      <div className={`bottle-item ${selectedBottle === 1 ? 'white' : ''}`}>
        <img
          src={require('../Assets/Images/0.33.png')}
          onClick={() => handleImageClick(1)}
          alt=''
        />
        <p>300ml</p>
      </div>
      <div className={`bottle-item ${selectedBottle === 2 ? 'white' : ''}`}>
        <img
          src={require('../Assets/Images/1.5.png')}
          onClick={() => handleImageClick(2)}
          alt=''
        />
        <p>500ml</p>
      </div>
      <div className={`bottle-item ${selectedBottle === 3 ? 'white' : ''}`}>
        <img
          src={require('../Assets/Images/0.5.png')}
          onClick={() => handleImageClick(3)}
          alt=''
        />
        <p>1L</p>
      </div>
      <div className={`bottle-item ${selectedBottle === 4 ? 'white' : ''}`}>
        <img
          src={require('../Assets/Images/1.png')}
          onClick={() => handleImageClick(4)}
          alt=''
        />
        <p>2L</p>
      </div>
    </div>
  );
}

export default BottleSelector;
