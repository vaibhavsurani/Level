function Asia () {
    return(
        <div id="blog" className=" w-full bg-[url('./images/bg-img-2.jpg')] bg-cover bg-center flex flex-col lg:flex-row px-20 py-20 justify-center items-center">
            <div className="text-left flex flex-col justify-center items-start w-[330px] md:w-[750px] lg:w-[350px]">
                <span className="text-5xl font-semibold pb-4">ASIA</span>
                <span className="text-3xl text-[#ee5057] font-semibold pb-6">Singapore</span>
            </div>
            <div className="px-6 py-6 shadow-[0_0_10px_0_rgba(0,0,0,0.15)] space-y-6 w-[330px] md:w-[750px]">
                <div className="flex flex-col md:flex-row">
                    <div className="pr-6">
                        <img className="min-w-[280px]" src=".\images\img-03.jpg"></img>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <span className="text-[#ee5057] text-left text-lg font-semibold">Suspendisse vel est libero sem phasellus ac laoreet</span>
                        <span className="text-gray-600 text-sm font-light">Vivamus eget tellus ornare, sollicitudin quam id, dictum nulla.
                             Phasellus finibus rhoncus justo, tempus eleifend neque dictum ac.
                              Aenean metus leo, consectetur non.</span>
                        <span className="text-gray-600 text-sm font-light">Etiam aliquam arcu at mauris consectetur scelerisque.
                             Integer elementum justo in orci facilisis ultricies.
                              Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida.</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="pr-6">
                        <img className="min-w-[280px]" src=".\images\img-04.jpg"></img>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <span className="text-left text-lg font-semibold">Suspendisse vel est libero sem phasellus ac laoreet</span>
                        <span className="text-gray-600 text-sm font-light">Duis accumsan sagittis tortor in ultrices.
                             Praesent tortor ante, fringilla ac nibh porttitor, fermentum commodo nulla.</span>
                        <a className="text-[#ee5057] font-semibold text-sm">CONTINUE READING...</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="pr-6">
                        <img className="min-w-[280px]" src=".\images\img-05.jpg"></img>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <span className="text-left text-lg font-semibold">Faucibus dolor ligula nisl metus auctor aliquet</span>
                        <span className="text-gray-600 text-sm font-light">Nunc in felis aliquet metus luctus iaculis vel et nisi.
                             Nulla venenatis nisl orci, laoreet ultricies massa tristique id.</span>
                        <a className="text-[#ee5057] font-semibold text-sm">CONTINUE READING...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asia