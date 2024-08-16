/*import React, {useEffect, useState} from 'react';
//import { Link } from 'react-router-dom';



const HomeCards = () =>{
    const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try{
        const response = await fetch('https://localhost:8090/movies');
        const data = await response.json();
        setMovies(data);
    }catch (error){
        
        console.error('error fetching movie data:', error);
    }
  };
  useEffect(() => {
  fetchData();
}, []);



    return(
        <section>
         <h5>LATEST MOVIES</h5>
         <div className="grid grid-cols gap-0.5 md:grid-cols-4 py-40">
            {movies.map((movie) => (
                <div key={movie.id} className="w-full flex justify-center items-center p-0 m-0">
                  <Link to={`/movie/${movie.id}`}>
                    <img src={movie.image} alt={movie.title} className="w-full h-3/4 object-cover"/>
                  
                  </Link>
                </div>
            ))}
         </div>
        </section>
       
    )
}
export default HomeCards;
*/


