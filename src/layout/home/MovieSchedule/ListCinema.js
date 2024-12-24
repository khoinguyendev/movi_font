import React from 'react'
import "../home.css"
const ListCinema = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            {/* left */}
            <div className='fresnel-container fresnel-greaterThan-sm fresnel-:R335am:'>
                <div className='jsx-e3ca1fdb8a72e6cd cinema-list-height relative  mx-0 divide-y divide-gray-100 '>
                    <div className='relative z-20 px-3 py-2'>
                        <input type="text" placeholder="Tìm theo tên rạp ..." className="block h-9 w-full items-center justify-center rounded border border-gray-200 bg-gray-50 py-1 pl-3 pr-10 text-sm" defaultValue />
                        <span className="absolute right-5 top-4 border-none opacity-50 outline-none" aria-label="Search"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></span>
                    </div>
                    <div className='  bg-pink-50 opacity-100'>
                        <div className='fwefwe relative block   px-4 py-2'>
                            <div className="z-1 absolute inset-0 bg-transparent"></div>
                            <div className="rap-detail flex flex-nowrap items-center ">
                                <div className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded border border-gray-200 bg-white ">
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                            <img alt="..." aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
                                        </span>
                                        <img alt="CGV Sư Vạn Hạnh" src="https://homepage.momocdn.net/cinema/momo-amazone-s3-api-240829164527-638605467276820522.png" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    </span>
                                </div>
                                <div className="mb-0 min-w-0 flex-1 pl-3 text-md leading-tight text-gray-800">
                                    <span>CGV Sư Vạn Hạnh</span>
                                </div>
                                <div className="hidden flex-none self-center pl-2 md:block md:pl-5 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" cursor-pointer  md:hover:bg-gray-50">
                        <div className="fwefwe relative block   px-4 py-2">
                            <div className="z-1 absolute inset-0 bg-transparent" />
                            <div className="rap-detail flex flex-nowrap items-center ">
                                <div className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded border border-gray-200 bg-white ">
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                        <img alt="..." aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
                                    </span>
                                        <img alt="CGV Crescent Mall" src="https://homepage.momocdn.net/cinema/momo-amazone-s3-api-240829164527-638605467276820522.png" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    </span>
                                </div>
                                <div className="mb-0 min-w-0 flex-1 pl-3 text-md leading-tight text-gray-800">
                                    <span>CGV Crescent Mall</span>
                                </div>
                                <div className="hidden flex-none self-center pl-2 md:block md:pl-5 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 text-center"><button type="button" className="btn inline-block rounded-3xl border border-pink-500 border-opacity-30 bg-pink-50 bg-opacity-50 px-4 py-1 text-center text-sm font-bold text-pink-600 text-opacity-90 transition-all hover:bg-pink-100">Xem thêm</button></div>
                </div>
            </div>

            {/* right */}
            <div className=' cinema-list-height -mx-5 md:col-span-2  md:mx-0 md:border-l md:border-gray-200 '>
                {/* địa chỉ */}
                <div className="fresnel-container fresnel-greaterThan-sm fresnel-:Rd35am: sticky top-0 z-20 shadow-sm">
                    <div className=" flex h-[62px] items-center bg-gray-50 px-4  pb-2.5 pt-2.5 ">
                        <div className="rap-detail flex w-full flex-nowrap  items-center">
                            <div className="hidden flex-none md:block">
                                <div className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded border border-gray-200 bg-white ">
                                    <a href="/cinema/rap/cgv/cgv-su-van-hanh-73" className="flex">
                                        <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                                            <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                                <img alt="..." aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
                                            </span>
                                            <img alt="CGV Sư Vạn Hạnh" src="https://homepage.momocdn.net/cinema/momo-amazone-s3-api-240829164527-638605467276820522.png" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="min-w-0 flex-1 md:pl-3">
                                <div className="mb-0 text-md font-semibold leading-tight text-gray-800">
                                    <a href="/cinema/rap/cgv/cgv-su-van-hanh-73" className="text-gray-800 hover:text-pink-500 " alt="CGV Sư Vạn Hạnh">Lịch chiếu phim CGV Sư Vạn Hạnh</a>
                                </div>
                                <div className="flex flex-nowrap items-center text-tiny text-gray-500">
                                    <div className="truncate">Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận 10</div>
                                    <div className="pl-2 false">
                                        <a className="jsx-ed65a84edc56f4ec inline-block  text-blue-500 whitespace-nowrap relative z-10 hover:text-blue-700 cursor-pointer btn-gg">[ Bản đồ ]</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ngày */}
                <div className=" box-nav  z-20 border-b border-gray-200 bg-white py-2 top-sticky-menu sticky ">
                    <div style={{ height: "62px", paddingLeft: "1.25rem", paddingRight: "1.25rem" }} className="px-5  swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div classname="flex" style={{ display: 'flex' }}>
                            <div className=" w-16 is-active" style={{ marginRight: 8 }}><div className="jsx-946ac3e01ac3c487 w-16 cursor-pointer  overflow-hidden rounded  border bg-white   py-0 text-center transition-all  border-pink-700"><div className="jsx-946ac3e01ac3c487 mx-auto justify-center py-1 text-lg  font-semibold  bg-pink-600 text-white">25</div><div className="jsx-946ac3e01ac3c487 text-nowrap flex  h-6 items-center justify-center text-xs text-pink-600">Hôm nay</div></div></div>
                            <div className=" w-16" style={{ marginRight: 8 }}><div className="jsx-946ac3e01ac3c487 w-16 cursor-pointer  overflow-hidden rounded  border bg-white   py-0 text-center transition-all  border-gray-300 hover:border-gray-400 "><div className="jsx-946ac3e01ac3c487 mx-auto justify-center py-1 text-lg  font-semibold  bg-gray-100 ">26</div><div className="jsx-946ac3e01ac3c487 text-nowrap flex  h-6 items-center justify-center text-xs text-gray-400 ">Thứ 3</div></div></div>
                            <div className=" w-16" style={{ marginRight: 8 }}><div className="jsx-946ac3e01ac3c487 w-16 cursor-pointer  overflow-hidden rounded  border bg-white   py-0 text-center transition-all  border-gray-300 hover:border-gray-400 "><div className="jsx-946ac3e01ac3c487 mx-auto justify-center py-1 text-lg  font-semibold  bg-gray-100 ">26</div><div className="jsx-946ac3e01ac3c487 text-nowrap flex  h-6 items-center justify-center text-xs text-gray-400 ">Thứ 3</div></div></div>
                            <div className=" w-16" style={{ marginRight: 8 }}><div className="jsx-946ac3e01ac3c487 w-16 cursor-pointer  overflow-hidden rounded  border bg-white   py-0 text-center transition-all  border-gray-300 hover:border-gray-400 "><div className="jsx-946ac3e01ac3c487 mx-auto justify-center py-1 text-lg  font-semibold  bg-gray-100 ">26</div><div className="jsx-946ac3e01ac3c487 text-nowrap flex  h-6 items-center justify-center text-xs text-gray-400 ">Thứ 3</div></div></div>
                            <div className=" w-16" style={{ marginRight: 8 }}><div className="jsx-946ac3e01ac3c487 w-16 cursor-pointer  overflow-hidden rounded  border bg-white   py-0 text-center transition-all  border-gray-300 hover:border-gray-400 "><div className="jsx-946ac3e01ac3c487 mx-auto justify-center py-1 text-lg  font-semibold  bg-gray-100 ">26</div><div className="jsx-946ac3e01ac3c487 text-nowrap flex  h-6 items-center justify-center text-xs text-gray-400 ">Thứ 3</div></div></div>
                            <div className=" w-16" style={{ marginRight: 8 }}><div className="jsx-946ac3e01ac3c487 w-16 cursor-pointer  overflow-hidden rounded  border bg-white   py-0 text-center transition-all  border-gray-300 hover:border-gray-400 "><div className="jsx-946ac3e01ac3c487 mx-auto justify-center py-1 text-lg  font-semibold  bg-gray-100 ">26</div><div className="jsx-946ac3e01ac3c487 text-nowrap flex  h-6 items-center justify-center text-xs text-gray-400 ">Thứ 3</div></div></div>

                        </div>

                    </div>
                </div>
                {/* list phim */}
                <div className='booking-list-height relative'>
                    <div className='normal-accordion divide-y divide-gray-200'>
                        <div className='grid'>
                            <div className='block w-full px-4 py-4 text-left'>
                                <div className='film-show grid gap-x-4  gap-y-0 md:gap-x-4 lg:gap-x-6'>
                                    <div className=" col-start-1 row-span-2 row-start-1 ">
                                        <a href="/cinema/wicked-24043" className=" group block ">
                                            <div className=" background-gray-100  relative overflow-hidden rounded">
                                                <div className=" flex bg-gray-200">
                                                    <div className="aspect-w-7 aspect-h-10 w-full scale-100 transition-transform duration-300 group-hover:scale-105">
                                                        <img src="https://cinema.momocdn.net/img/76909637625467826-4OgGFdVtiYoT1jnLfnOGu05dCyI.jpg" className="h-full w-full object-cover object-center" loading="lazy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className=" col-start-2 "><div className=" mb-1 flex origin-left scale-90 flex-row  flex-nowrap space-x-2"><div className="jsx-83755f2b759333b1 inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white text-opacity-95 cinema-rate-k" style={{ minWidth: 20 }}>K</div></div><div className=" font-semibold leading-tight text-gray-800"><a href="/cinema/wicked-24043" className="">WICKED</a></div><div className=" text-tiny mt-1 leading-tight text-gray-400">Chính Kịch,Lãng Mạn,Giả Tưởng</div></div>
                                    <div className="  col-span-2 col-start-1 md:col-start-2">
                                        <div className=" mb-4 mt-4">
                                            <div className=" mb-2 text-sm font-semibold ">2D Phụ đề | IMAX</div>
                                            <div className=" grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">16:30</strong> ~ 18:52
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">19:40</strong> ~ 22:02
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">22:50</strong> ~ 01:12
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" mb-4 mt-4">
                                            <div className=" mb-2 text-sm font-semibold ">2D Phụ đề</div>
                                            <div className=" grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">12:00</strong> ~ 14:22
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">15:20</strong> ~ 17:42
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">18:40</strong> ~ 21:02
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">22:00</strong> ~ 00:22
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='block w-full px-4 py-4 text-left'>
                                <div className='film-show grid gap-x-4  gap-y-0 md:gap-x-4 lg:gap-x-6'>
                                    <div className=" col-start-1 row-span-2 row-start-1 ">
                                        <a href="/cinema/wicked-24043" className=" group block ">
                                            <div className=" background-gray-100  relative overflow-hidden rounded">
                                                <div className=" flex bg-gray-200">
                                                    <div className="aspect-w-7 aspect-h-10 w-full scale-100 transition-transform duration-300 group-hover:scale-105">
                                                        <img src="https://cinema.momocdn.net/img/76909637625467826-4OgGFdVtiYoT1jnLfnOGu05dCyI.jpg" className="h-full w-full object-cover object-center" loading="lazy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className=" col-start-2 "><div className=" mb-1 flex origin-left scale-90 flex-row  flex-nowrap space-x-2"><div className="jsx-83755f2b759333b1 inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white text-opacity-95 cinema-rate-k" style={{ minWidth: 20 }}>K</div></div><div className=" font-semibold leading-tight text-gray-800"><a href="/cinema/wicked-24043" className="">WICKED</a></div><div className=" text-tiny mt-1 leading-tight text-gray-400">Chính Kịch,Lãng Mạn,Giả Tưởng</div></div>
                                    <div className="  col-span-2 col-start-1 md:col-start-2">
                                        <div className=" mb-4 mt-4">
                                            <div className=" mb-2 text-sm font-semibold ">2D Phụ đề | IMAX</div>
                                            <div className=" grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">16:30</strong> ~ 18:52
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">19:40</strong> ~ 22:02
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">22:50</strong> ~ 01:12
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" mb-4 mt-4">
                                            <div className=" mb-2 text-sm font-semibold ">2D Phụ đề</div>
                                            <div className=" grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">12:00</strong> ~ 14:22
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">15:20</strong> ~ 17:42
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">18:40</strong> ~ 21:02
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">22:00</strong> ~ 00:22
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='block w-full px-4 py-4 text-left'>
                                <div className='film-show grid gap-x-4  gap-y-0 md:gap-x-4 lg:gap-x-6'>
                                    <div className=" col-start-1 row-span-2 row-start-1 ">
                                        <a href="/cinema/wicked-24043" className=" group block ">
                                            <div className=" background-gray-100  relative overflow-hidden rounded">
                                                <div className=" flex bg-gray-200">
                                                    <div className="aspect-w-7 aspect-h-10 w-full scale-100 transition-transform duration-300 group-hover:scale-105">
                                                        <img src="https://cinema.momocdn.net/img/76909637625467826-4OgGFdVtiYoT1jnLfnOGu05dCyI.jpg" className="h-full w-full object-cover object-center" loading="lazy" />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className=" col-start-2 "><div className=" mb-1 flex origin-left scale-90 flex-row  flex-nowrap space-x-2"><div className="jsx-83755f2b759333b1 inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white text-opacity-95 cinema-rate-k" style={{ minWidth: 20 }}>K</div></div><div className=" font-semibold leading-tight text-gray-800"><a href="/cinema/wicked-24043" className="">WICKED</a></div><div className=" text-tiny mt-1 leading-tight text-gray-400">Chính Kịch,Lãng Mạn,Giả Tưởng</div></div>
                                    <div className="  col-span-2 col-start-1 md:col-start-2">
                                        <div className=" mb-4 mt-4">
                                            <div className=" mb-2 text-sm font-semibold ">2D Phụ đề | IMAX</div>
                                            <div className=" grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">16:30</strong> ~ 18:52
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">19:40</strong> ~ 22:02
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">22:50</strong> ~ 01:12
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" mb-4 mt-4">
                                            <div className=" mb-2 text-sm font-semibold ">2D Phụ đề</div>
                                            <div className=" grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">12:00</strong> ~ 14:22
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">15:20</strong> ~ 17:42
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">18:40</strong> ~ 21:02
                                                </div>
                                                <div className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                                                    <strong className="text-md font-semibold ">22:00</strong> ~ 00:22
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCinema