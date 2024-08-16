import { NavLink } from 'react-router-dom';
import image from './assets/Images/Rectangle1.png';


const Header = () =>{

    return(
        <div>
        <header className="bg-cover bg-cenetr h-96"
          style={{backgroundImage: `url(${image}`}}
        >
            <nav className="flex justify-between items-center w-[90%] mx-[6%] py-8 text-2xl">
              <div>
                <span className="text-blue-400">Enter</span>
                <span className="text-white">Stream</span>

              </div>
              <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8" >
                    <li>
                    <NavLink
                                    to="/movies"
                                    className={({ isActive }) => 
                                        `hover:text-grey-500 text-white ${isActive ? 'text-yellow-400' : ''}`
                                    }
                                >
                                    MOVIES
                                </NavLink>
                    </li>
                    <li>
                    <NavLink
                                    to="/series"
                                    className={({ isActive }) => 
                                        `hover:text-grey-500 text-white ${isActive ? 'text-yellow-400' : ''}`
                                    }
                                >
                                    SERIES
                                </NavLink>
                    </li>

                </ul>
              </div>
              <div className="flex items-center gap-6">
                <button className="bg-[#a6c1ee] text-white px-5 py-1 rounded-full hover:bg-[#87acec] text-2xl">
                    SUBSCRIBE
                    </button>
              </div>
            </nav>

        </header>
       </div>
        

    )
}
export default Header