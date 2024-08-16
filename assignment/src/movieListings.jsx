import { useState, useEffect } from 'react';
//import movie from './movies.json'
// movies from './movies/json';
const MoviesListings = () => {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchMovies = async () => {
        try{
            const res = await fetch('http://localhost:8092/movies');
            const data = await res.json();
            setJobs(data);
        }catch (error){
            console.log('Error fetching', error);
        }finally{
            setLoading(false);
        }
        
        
    }
 }, [])
    return(
        <section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>LATEST MOVIES</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {loading ? (
                       <h2>Loading...</h2>
                    ) : (
                        <>
                           {latestMovies.map((movie) => (
                        <movieListing key={movie.id} movie={movie}/>
                    ))}
                        </>
                    )}
                    
                   
                </div>
            </div>

        </section>

    )
}
export default MoviesListings
