import { Link } from "react-router-dom";
const MoreButton = () =>{
    return(
        <section className='m-auto max-w-lg my-10 px-6'>
            <Link to='/movies' 
            className='block bg-black text-white text-center py-4 px-6 rounded-xl  hover:bg-gray-700'>
               More
            </Link>
           

        </section>

    )
}
export default MoreButton;
