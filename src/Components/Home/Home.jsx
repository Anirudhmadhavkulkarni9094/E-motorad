import React, { useState } from 'react';
import './Home.css';
import Intro from '../Intro/Intro';
import Chart from '../Chart/Chart';
import Product from '../Product/Product';
import BottleSelector from '../BottleSelector/BottleSelector';
import InfoCard from '../Product/InfoCard';
import image1 from '../Assets/Images/300ml.png';
import image2 from '../Assets/Images/0.3l.png';
import image3 from '../Assets/Images/1l.png';
import image4 from '../Assets/Images/5l.png';

function Home() {
  const [id, setId] = useState(0);

  const handleId = (newId) => {
    setId(newId);
  }

  const Pepsi = [
    {
      id: 1,
      title: "Pepsi Classic",
      amountPerServe: 250, // in milliliters
      sodium: 20, // in milligrams
      carbohydrate: 30, // in grams
      protein: 0, // in grams
      capacity: "250ml",
      servings: 1, // Number of servings in the bottle
      img: image2
    },
    {
      id: 2,
      title: "Pepsi Can",
      amountPerServe: 300, // in milliliters
      sodium: 25, // in milligrams
      carbohydrate: 35, // in grams
      protein: 0, // in grams
      capacity: "300ml",
      servings: 1, // Number of servings in the bottle
      img: image1
    },
    {
      id: 3,
      title: "Pepsi Party",
      amountPerServe: 500, // in milliliters
      sodium: 30, // in milligrams
      carbohydrate: 50, // in grams
      protein: 0, // in grams
      capacity: "500ml",
      servings: 1, // Number of servings in the bottle
      img: image3
    },
    {
      id: 4,
      title: "Pepsi Mega",
      amountPerServe: 1000, // in milliliters (1 liter)
      sodium: 60, // in milligrams
      carbohydrate: 100, // in grams
      protein: 0, // in grams
      capacity: "1L",
      servings: 4, // Number of servings in the bottle
      img: image4
    },
    {
      id: 5,
      title: "Pepsi Jumbo",
      amountPerServe: 2000, // in milliliters (2 liters)
      sodium: 120, // in milligrams
      carbohydrate: 200, // in grams
      protein: 0, // in grams
      capacity: "2L",
      servings: 8, // Number of servings in the bottle
      img: image4
    },
  ];
  

  return (
    <div className="m-3">
      <div className="row justify-content-between">
        <div className="col-lg-8 col-md-12 col-sm-12 margin">
          <Intro data={Pepsi[id]} />
          <div className="row my-2">
            <Chart data={Pepsi[id]} />
          </div>
          <BottleSelector handleId={handleId} />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 Product-page d-flex">
          <Product data={Pepsi[id]} />
          <InfoCard data={Pepsi[id]} />
        </div>
      </div>
    </div>
  );
}

export default Home;
