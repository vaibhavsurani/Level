import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Journey () {
    return(
        <div id="portfolio" className="w-full bg-gray-100 flex flex-col xl:flex-row justify-center items-center py-20 px-4">
            <div className="relative h-[510px] w-[410px] md:w-[710px] my-20 xl:my-0 xl:mr-10">
                <Swiper className="flex-1 h-[600px]  [&_.swiper-pagination]:absolute [&_.swiper-pagination]:bottom-0"
                    
                    spaceBetween={10}
                    slidesPerView={2}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    >
                    <SwiperSlide>
                        <div className='bg-white h-[510px] w-[200px] md:w-[350px]'>
                            <img src="./images/img-01.jpg"></img>
                            <div className='p-6'>
                                <div className='text-lg font-semibold'>NUNC IN FELIS ALIQUET METUS BUCTUS IACULIAS</div>
                                <span className='text-xs text-gray-500'>Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla.
                                     Nullam sollicitudin at augue venenatis eleifend.
                                     Nulla ligula ligula, egestas sit amet viverra id, iaculis sit amet ligula.</span>
                                <div className="bg-[#ee5057] mt-4 w-full py-3 text-center text-white text-xs font-semibold">GET MORE INFO</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white h-[510px] w-[200px] md:w-[350px]'>
                            <img src="./images/img-02.jpg"></img>
                            <div className='p-6'>
                                <div className='text-lg font-semibold'>SED CURSUS DICTUM NUNC QUIS MOLESTIE</div>
                                <span className='text-xs text-gray-500'>Pellentesque quis dui sit amet purus scelerisque eleifend sed ut eros.
                                     Morbi viverra blandit massa in varius. Sed nec ex eu ex tincidunt iaculis.
                                      Curabitur eget turpis gravida.</span>
                                <div className="bg-[#ee5057] mt-4 w-full py-3 text-center text-white text-xs font-semibold">GET MORE INFO</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white h-[510px] w-[200px] md:w-[350px]'>
                            <img src="./images/img-01.jpg"></img>
                            <div className='p-6'>
                                <div className='text-lg font-semibold'>NUNC IN FELIS ALIQUET METUS BUCTUS IACULIAS</div>
                                <span className='text-xs text-gray-500'>Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla.
                                     Nullam sollicitudin at augue venenatis eleifend.
                                     Nulla ligula ligula, egestas sit amet viverra id, iaculis sit amet ligula.</span>
                                <div className="bg-[#ee5057] mt-4 w-full py-3 text-center text-white text-xs font-semibold">GET MORE INFO</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white h-[510px] w-[200px] md:w-[350px]'>
                            <img src="./images/img-02.jpg"></img>
                            <div className='p-6'>
                                <div className='text-lg font-semibold'>SED CURSUS DICTUM NUNC QUIS MOLESTIE</div>
                                <span className='text-xs text-gray-500'>Pellentesque quis dui sit amet purus scelerisque eleifend sed ut eros.
                                     Morbi viverra blandit massa in varius. Sed nec ex eu ex tincidunt iaculis.
                                      Curabitur eget turpis gravida.</span>
                                <div className="bg-[#ee5057] mt-4 w-full py-3 text-center text-white text-xs font-semibold">GET MORE INFO</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white h-[510px] w-[200px] md:w-[350px]'>
                            <img src="./images/img-01.jpg"></img>
                            <div className='p-6'>
                                <div className='text-lg font-semibold'>NUNC IN FELIS ALIQUET METUS BUCTUS IACULIAS</div>
                                <span className='text-xs text-gray-500'>Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla.
                                     Nullam sollicitudin at augue venenatis eleifend.
                                     Nulla ligula ligula, egestas sit amet viverra id, iaculis sit amet ligula.</span>
                                <div className="bg-[#ee5057] mt-4 w-full py-3 text-center text-white text-xs font-semibold">GET MORE INFO</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white h-[510px] w-[200px] md:w-[350px]'>
                            <img src="./images/img-02.jpg"></img>
                            <div className='p-6'>
                                <div className='text-lg font-semibold'>SED CURSUS DICTUM NUNC QUIS MOLESTIE</div>
                                <span className='text-xs text-gray-500'>Pellentesque quis dui sit amet purus scelerisque eleifend sed ut eros.
                                     Morbi viverra blandit massa in varius. Sed nec ex eu ex tincidunt iaculis.
                                      Curabitur eget turpis gravida.</span>
                                <div className="bg-[#ee5057] mt-4 w-full py-3 text-center text-white text-xs font-semibold">GET MORE INFO</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    
                    </Swiper>
            </div>
            <div className="bg-white h-[510px] w-[410px] md:w-[710px] xl:w-[350px]">
                <div className="flex-col bg-[#ee5057] text-left text-white px-4 py-4">
                    <div className="text-xl pb-2">Recommended Places</div>
                    <div className="text-sm font-light">Enamel pin cliche tilde, kitsch and VHS thundercats</div>
                </div>
                <div className="w-full px-4 py-4 space-y-4">
                    <div className="group bg-gray-100 flex flex-row hover:bg-gray-300 duration-300 ease-in-out">
                        <img src=".\images\tn-img-01.jpg"></img>
                        <div className="pl-6 pt-7 text-xl font-semibold group-hover:text-[#ee5057] duration-300">EUROPE</div>
                    </div>
                    <div className="group bg-gray-100 flex flex-row hover:bg-gray-300 duration-300 ease-in-out">
                        <img src=".\images\tn-img-02.jpg"></img>
                        <div className="pl-6 pt-7 text-xl font-semibold group-hover:text-[#ee5057] duration-300">ASIA</div>
                    </div>
                    <div className="group bg-gray-100 flex flex-row hover:bg-gray-300 duration-300 ease-in-out">
                        <img src=".\images\tn-img-03.jpg"></img>
                        <div className="pl-6 pt-7 text-xl font-semibold group-hover:text-[#ee5057] duration-300">AFRICA</div>
                    </div>
                    <div className="group bg-gray-100 flex flex-row hover:bg-gray-300 duration-300 ease-in-out">
                        <img src=".\images\tn-img-04.jpg"></img>
                        <div className="pl-6 pt-7 text-xl font-semibold group-hover:text-[#ee5057] duration-300">SOUTH AMERICA</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey