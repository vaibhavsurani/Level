import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';

function NavBar () {

        

    return(
        <div id="navigation" className="sticky top-0 z-222 h-[120px] w-full bg-white flex justify-center duration-500">
            <div className="flex justify-between h-full w-3xl lg:w-5xl">
                <div className="h-full w-[160px] flex justify-Center items-center">
                    <img src="./images/logo.png"></img>
                    <span className="text-3xl font-bold pl-2">Level</span>
                </div>
                <nav className="h-full max-w-[500px] flex">
                    <a>
                        <Link to="header" offset={-120} className="border-l-1 border-gray-300 h-full px-8 flex justify-center items-center text-gray-900 text-xs font-light 
                        hover:bg-[#ee5057] hover:text-white hover:border-white duration-300">HOME</Link>
                    </a>
                    
                        <Link to="portfolio" offset={-100} className="border-l-1 border-gray-300 h-full px-8 flex justify-center items-center text-gray-900 text-xs font-light 
                        hover:bg-[#ee5057] hover:text-white hover:border-white duration-300">PORTFOLIO</Link>
                    
                    <a>
                        <Link to="blog" offset={-100} className="border-l-1 border-gray-300 h-full px-8 flex justify-center items-center text-gray-900 text-xs font-light 
                        hover:bg-[#ee5057] hover:text-white hover:border-white duration-300">BLOG ENTRIES</Link>
                    </a>
                    <a>
                        <Link to="contactpage" offset={-100} className="border-l-1 border-r-1 border-gray-300 h-full px-8 flex justify-center items-center text-gray-900 text-xs font-light 
                        hover:bg-[#ee5057] hover:text-white hover:border-white duration-300">CONTACT US</Link>
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default NavBar