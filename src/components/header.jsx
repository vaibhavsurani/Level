import { BiSolidMap } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";

function Header () {

    const myFunction = (event) => {
        event.preventDefault();
        // console.log(event);
        const obj = Object.fromEntries(new FormData(event.target).entries())
        console.log(obj);
    }


    return(
        <div id="header" className="bg-[url('./images/bg-img-1.jpg')] bg-cover bg-center py-40 flex justify-center px-3">
            <div className="bg-white w-[500px] md:w-[700px] lg:w-[1000px] px-10 py-8">

                <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-[10px] gap-y-[16px] text-sm text-gray-900" onSubmit={myFunction}>
                    <div className="relative lg:col-span-4 w-full flex">
                        <input type="text" name="place" id="place" placeholder="Type your destination..." 
                        className=" border-1 border-gray-300 px-3 py-3 pl-10 w-full focus:outline-1 focus:ring-4 focus:ring-[#FAD2D2] outline-[#ee5057] duration-150"></input>
                        <div className="absolute left-[6px] top-[8px] text-3xl text-[#ee5057]  pr-2">
                            <BiSolidMap/>
                        </div>
                    </div>
                    <div className="relative lg:col-span-4 w-full flex">
                        <input type="date" name="start" id="start" placeholder="Type your destination..." 
                        className=" border-1 border-gray-300 px-3 py-3 pl-10 w-full focus:outline-1 focus:ring-4 focus:ring-[#FAD2D2] outline-[#ee5057] duration-150"></input>
                        <div className="absolute left-[9px] top-[10px] text-2xl text-[#ee5057]  pr-2">
                            <FaCalendarAlt/>
                        </div>
                    </div>
                    <div className="relative lg:col-span-4 w-full flex">
                        <input type="date" name="end" id="end" placeholder="Type your destination..." 
                        className=" border-1 border-gray-300 px-3 py-3 pl-10 w-full focus:outline-1 focus:ring-4 focus:ring-[#FAD2D2] outline-[#ee5057] duration-150"></input>
                        <div className="absolute left-[9px] top-[10px] text-2xl text-[#ee5057]  pr-2">
                            <FaCalendarAlt/>
                        </div>
                    </div>

                    <div className="relative lg:col-span-3 w-full flex">
                        <select name="adult" id="adult" 
                        className=" border-1 border-gray-300 px-3 py-3 pl-10 w-full focus:outline-1 focus:ring-4 focus:ring-[#FAD2D2] outline-[#ee5057] duration-150">
                            <option value="">Adult</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <div className="absolute left-[4px] top-[8px] text-3xl text-[#ee5057]  pr-2">
                            <FaPerson/>
                        </div>
                    </div>
                    <div className="relative lg:col-span-3 w-full flex">
                        <select name="children" id="children" 
                        className=" border-1 border-gray-300 px-3 py-3 pl-10 w-full focus:outline-1 focus:ring-4 focus:ring-[#FAD2D2] outline-[#ee5057] duration-150">
                            <option value="">Children</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <div className="absolute left-2 top-3 text-2xl text-[#ee5057]  pr-2">
                            <FaChild/>
                        </div>
                    </div>
                    <div className="relative lg:col-span-3 w-full flex">
                        <select  name="room" id="room" 
                        className=" border-1 border-gray-300 px-3 py-3 pl-10 w-full focus:outline-1 focus:ring-4 focus:ring-[#FAD2D2] outline-[#ee5057] duration-150">
                            <option value="">Room</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <div className="absolute left-[6px] top-[9px] text-[28px] text-[#ee5057]  pr-2">
                            <IoIosBed/>
                        </div>
                    </div>
                    <div className="lg:col-span-3 w-full flex">
                        <button type="submit" name="" value="CHECK AVAILABILITY" 
                        className="bg-[#ee5057] border-1 border-gray-300 px-3 py-3 w-full text-white focus:outline-1 focus:ring-4
                         focus:ring-[#FAD2D2] text-xs font-semibold outline-[#ee5057] duration-150">CHECK AVAILABILITY</button>
                    </div>
                </form>
                <div className="relative w-full pt-3">
                    <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <a className="text-sm text-[#ee5057] font-semibold absolute right-0" href="https://support.google.com/">Need Help?</a>
                </div>

            </div>
        </div>
    )
}

export default Header