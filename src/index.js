import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import dog1 from "./assets/dog1.jpg";
import dog2 from "./assets/dog2.jpg";
import dog3 from "./assets/dog3.jpg";
import dog4 from "./assets/dog4.jpg";
import dog5 from "./assets/dog5.jpg";
import dog6 from "./assets/dog6.jpg";
import dog7 from "./assets/dog7.jpg";
import dog8 from "./assets/dog8.jpg";

const dogs = [
  { photo: dog1, name: "Beagle" },
  { photo: dog2, name: "Golden Retriever" },
  { photo: dog3, name: "Doberman Pinscher" },
  { photo: dog4, name: "Bulldog" },
  { photo: dog5, name: "Chihuahua" },
  { photo: dog6, name: "Dachshund" },
  { photo: dog7, name: "German Shepherd" },
  { photo: dog8, name: "Pug" },
];

const DogGallery = ({ dogphoto, dogname }) => (
  <div className="dogGallery">
    <img src={dogphoto} alt={dogname} className="dogs" />
    <p>{dogname}</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <h1 className="title">🐶 Dog Gallery 🐶</h1>
    <div className="gallery">
    {dogs.map((dog) => (
      <DogGallery dogphoto={dog.photo} dogname={dog.name} />
    ))}
  </div>

  </div>
  
);
