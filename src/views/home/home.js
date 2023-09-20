import React, { useState, useEffect } from "react";
import mockData from "../../data/mockdata.json";
import { Link } from 'react-router-dom';

import "./home.css";

export default function Home() {
  const [animeData, setAnimeData] = useState(null);
  const [usedKeys] = useState([]);

  useEffect(() => {
    setAnimeData(mockData);
  }, []);

  function generateRandomKey(min, max, usedNumbers) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.includes(randomNumber));
    usedNumbers.push(randomNumber);
    return randomNumber;
  }

// Fonction pour générer un élément de contenu anime
const generateAnimeContent = (data, index) => {
  const randomKey = generateRandomKey(2, 10000, usedKeys);
  return (
    <div key={randomKey} className="anime-content">
      <Link to={`/anime/${data.id}`}>
        <div className="home-thumbnail-container">
          <img
            className="home-thumbnail"
            src={require(`../../assets/vop.png`)}
            alt={data.title}
          />
          <div className="thumbnail-overlay">
            <div className="thumbnail-title">{data.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};



return (
  <div className="home">
    <h1 className="home-title">Découvrir des Animés</h1>
    <div className="anime-container">
      {animeData
        ? animeData.map((data, index) =>
            generateAnimeContent(data, index)
          )
        : null}
    </div>
  </div>
);
}
