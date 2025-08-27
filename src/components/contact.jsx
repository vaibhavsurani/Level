

function Contact () {

    const myFunction = (event) => {
        event.preventDefault();
        // console.log(event);
        const obj = Object.fromEntries(new FormData(event.target).entries())
        console.log(obj);
    }

    return(
        <div id="contactpage" className="bg-[url('./images/bg-img-3.jpg')] bg-cover bg-center bg-top w-full pt-32 pb-16 px-16 flex justify-center">
            <div className="w-[510px] md:w-[1080px] md:h-[480px] grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-7">
                <div className="md:col-span-6 xl:col-span-7 bg-[#ee5057] h-[480px]"></div>
                <div className="md:col-span-6 xl:col-span-5 bg-white h-[480px] px-8 py-8">
                    <form className="space-y-4" onSubmit={myFunction}>
                        <div>
                            <input id="name" name="name" type="text" placeholder="Name" className="bg-gray-100 w-full px-3 py-[10px] text-gray-500 text-sm outline-none focus:ring-[#FAD2D2] focus:ring-3 rounded-none"></input>
                        </div>
                        <div>
                            <input id="email" name="email" type="text" placeholder="Email" className="bg-gray-100 w-full px-3 py-[10px] text-gray-500 text-sm outline-none focus:ring-[#FAD2D2] focus:ring-3 rounded-none"></input>
                        </div>
                        <div>
                            <input id="subject" name="subject" type="text" placeholder="Subject" className="bg-gray-100 w-full px-3 py-[10px] text-gray-500 text-sm outline-none focus:ring-[#FAD2D2] focus:ring-3 rounded-none"></input>
                        </div>
                        <div>
                            <textarea id="message" name="message" type="text-box" placeholder="Message" className="bg-gray-100 w-full px-3 py-[10px] h-[190px] text-gray-500 text-sm outline-none focus:ring-[#FAD2D2] focus:ring-3 rounded-none "></textarea>
                        </div>
                        
                            <button type="submit" className="bg-[#ee5057] w-full py-[12px] text-xs text-white font-semibold">SEND MESSAGE NOW</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact