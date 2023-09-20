import "./itempage.css";

import mockData from "../../data/mockdata.json";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Itempage() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);

  // Transformez id en integer en utilisant parseInt
  const parsedId = parseInt(id, 10);

  useEffect(() => {
    // Filtrer l'objet avec l'ID 1 à partir de mockData
    const filteredData = mockData.find((item) => item.id === parsedId);
    setAnimeData(filteredData);
  }, [parsedId]);
  console.log(animeData);

  return (
    <div className="settings">
      {animeData ? (
        <div>
          <h1 className="settings-title">TEST {id}</h1>
          <p>Titre : {animeData.title}</p>
          <p>Description : {animeData.description}</p>
          {/* Affichez d'autres champs de l'objet animeData ici */}
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}
