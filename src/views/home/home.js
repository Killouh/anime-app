import React, { useState, useEffect } from "react";
import mockData from "../../data/mockdata.json";

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
  const generateAnimeContent = () => {
    if (animeData) {
      const randomKey = generateRandomKey(1, 10000, usedKeys); // Génère une clé unique
      return (
        <div key={randomKey} className="anime-content">
          <div className="home-thumbnail-container">
            <img
              className="home-thumbnail"
              src={require(`../../assets/vop.png`)}
              alt={animeData.title}
            />
            <div className="thumbnail-overlay">
              <div className="thumbnail-title">{animeData.title}</div>
            </div>
          </div>
        </div>
      );
    }
    return null; // Retourne null si animeData est null
  };

  // Générez 15 éléments de contenu anime avec la même donnée mockée
  const animeContents = Array.from({ length: 17 }, () =>
    generateAnimeContent()
  );

  return (
    <div className="home">
      <h1 className="home-title">Découvrir des Animés</h1>
      <div className="anime-container">{animeContents}</div>
    </div>
  );
}
