import react from 'react'
import "tailwindcss";

function Footer () {
    return(
        <div className="bg-[#1E3444] text-sm text-white font-light flex justify-center items-center h-[80px]">
            Copyright © 2025 Your Company - Design:  
            <a href="https://www.tooplate.com/" className='text-[#ee5057]'> Tooplate</a>
        </div>
    )
}

export default Footer