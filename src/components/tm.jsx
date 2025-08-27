import { FaGavel } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaRegLifeRing } from "react-icons/fa";

function Tm () {
    return(
        <div className="pb-6 w-full">
            <div className="bg-[#ee5057] pt-12 w-full flex flex-col justify-center items-center">
                <div className="text-5xl text-white text-center">We are here to help you?</div>
                <div className="font-light text-white py-4 pb-6">Subscribe to get our newsletters</div>
                <a href="top" className="px-6 py-2 text-sm text-white bg-[#ee5057] border-2 border-b-1 border-white">
                    SUBSCRIBE NEWLETTERS
                </a>
            </div>

            <div className="">
                <div className="polygon bg-[#ee5057]"></div>
                <div className="flex flex-col sm:flex-row items-center justify-center py-24">


                    <div className=" flex flex-col items-center h-[450px] lg:h-[auto] w-[250px] lg:w-[330px] xl:w-[400px] px-12 py-10 hover:shadow-[0_0_10px_0_rgba(0,0,0,0.15)] hover:scale-110 transition duration-300 ">
                        <div className="text-7xl text-[#ee5057] transform rotate-y-180">
                           <FaGavel/>
                        </div>
                        <div className="text-[#ee5057] text-xl text-center font-semibold py-4">Level HTML Template by Tooplate website</div>
                        <div className="text-center text-gray-600 text-sm font-light">You are allowed to download, edit and use this template for your business or client websites.</div>
                        <a className="text-[#ee5057] text-sm font-semibold pt-4">CONTINUE READING...</a>
                    </div>


                    <div className=" flex flex-col items-center h-[450px] lg:h-[auto] w-[250px] lg:w-[330px] xl:w-[400px] px-12 py-10 hover:shadow-[0_0_10px_0_rgba(0,0,0,0.15)] hover:scale-110 transition duration-300">
                        <div className="text-7xl text-[#ee5057] ">
                           <BiSolidPlaneAlt/>
                        </div>
                        <div className="text-[#ee5057] text-xl text-center font-semibold py-4">Original Website Template Producer</div>
                        <div className="text-center text-gray-600 text-sm font-light">You are NOT allowed to re-distribute the downloadable template ZIP file on any website.</div>
                        <a className="text-[#ee5057] text-sm font-semibold pt-4">CONTINUE READING...</a>
                    </div>


                    <div className="flex flex-col items-center h-[450px] lg:h-[auto] w-[250px] lg:w-[330px] xl:w-[400px] px-12 py-10 hover:shadow-[0_0_10px_0_rgba(0,0,0,0.15)] hover:scale-110 transition duration-300">
                        <div className="text-7xl text-[#ee5057] ">
                           <FaRegLifeRing/>
                        </div>
                        <div className="text-[#ee5057] text-xl text-center font-semibold py-4">Contact us if you have any question</div>
                        <div className="text-center text-gray-600 text-sm font-light">If you see this template being distributed on any other site, that is an illegal copy.</div>
                        <a className="text-[#ee5057] text-sm font-semibold pt-4">CONTINUE READING...</a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Tm