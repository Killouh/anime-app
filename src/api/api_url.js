// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function GetAnimeInfo(){
//     const [animeData, setAnimeData] = useState(null);


//     useEffect(() => {
//         // Clee API
//         const apiKey = '1c18f4f95ddf8eb5a70439f135d20a6b';
    
//        // Exemple d'appel à l'API pour obtenir les détails d'un film par son ID
//     axios.get(`https://api.themoviedb.org/3/movie/123?api_key=${apiKey}`)
//     .then((response) => {
//       // Copiez les données de l'API dans un nouvel objet JSON
//       const newMovieData = { ...animeData, ...response.data };
      
//       // Mettez à jour l'objet JSON avec les nouvelles données
//       setAnimeData(newMovieData);
//     })
//     .catch((error) => {
//       console.error('Erreur lors de la requête API :', error);
//     });
// }, []);

// return (
//   <div>
//     <pre>{JSON.stringify(animeData, null, 2)}</pre>
//   </div>
// );
// }

// export default GetAnimeInfo;
