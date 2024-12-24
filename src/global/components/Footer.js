import React from 'react'

const Footer = () => {
    return (
        <footer className='grid grid-cols-1 flex-wrap bg-gray-900' style={{ backgroundColor: "rgb(23,23,23)" }}>
            <div className='footer-main order-2 py-7 text-white md:order-1 text-sm'>
                <div className='wrapper grid grid-cols-2 gap-5 sm:gap-x-20 sm:gap-y-10 lg:flex lg:flex-nowrap lg:gap-14'>
                    <div className="block grow md:w-44 md:shrink-0 md:border-none md:pb-0"><div className="whitespace-nowrap text-xs font-bold uppercase text-white text-opacity-80">Mua vé xem phim</div><div className="mt-3 flex w-full text-sm"><a href="/cinema/lich-chieu?fromType=nav_footer" target="_self" rel="noreferrer" className="flex items-center space-x-2 text-white text-opacity-50 duration-300 hover:text-opacity-100"><span className="block ">Lịch chiếu phim</span></a></div><div className="mt-3 flex w-full text-sm"><a href="/cinema/rap?fromType=nav_footer" target="_self" rel="noreferrer" className="flex items-center space-x-2 text-white text-opacity-50 duration-300 hover:text-opacity-100"><span className="block ">Rạp chiếu phim</span></a></div><div className="mt-3 flex w-full text-sm"><a href="/cinema/phim-chieu?fromType=nav_footer" target="_self" rel="noreferrer" className="flex items-center space-x-2 text-white text-opacity-50 duration-300 hover:text-opacity-100"><span className="block ">Phim chiếu rạp</span></a></div><div className="mt-3 flex w-full text-sm"><a href="/cinema/review?fromType=nav_footer" target="_self" rel="noreferrer" className="flex items-center space-x-2 text-white text-opacity-50 duration-300 hover:text-opacity-100"><span className="block ">Review phim</span></a></div><div className="mt-3 flex w-full text-sm"><a href="/cinema/top-phim?fromType=nav_footer" target="_self" rel="noreferrer" className="flex items-center space-x-2 text-white text-opacity-50 duration-300 hover:text-opacity-100"><span className="block ">Top phim</span></a></div><div className="mt-3 flex w-full text-sm"><a href="/cinema/blog?fromType=nav_footer" target="_self" rel="noreferrer" className="flex items-center space-x-2 text-white text-opacity-50 duration-300 hover:text-opacity-100"><span className="block ">Blog phim</span></a></div></div>
                    <div className=' md:order-none md:w-40 md:flex-none md:shrink-0 md:border-none md:pb-0'>
                        <div className="whitespace-nowrap text-xs font-bold uppercase text-white text-opacity-80">Dịch vụ nổi bật</div>
                        <div className="flex flex-wrap">
                            <div className="mt-3 flex w-full text-sm"><a href="/cinema?fromType=nav_footer" target="_self" rel="noreferrer" className="flex items-center space-x-2 text-white text-opacity-50 duration-300 hover:text-opacity-100"><span className="relative flex-none  h-5 w-5  md:h-6 md:w-6"><img alt='...' src="https://homepage.momocdn.net/img/momo-amazone-s3-api-240810203439-638589188796724974.svg" className="absolute inset-0" /></span><span className="block ">Vé xem phim</span></a></div>
                            <div className="mt-3 flex w-full text-sm"><a href="/bao-hiem-o-to/vat-chat?fromType=nav_footer" target="_self" rel="noreferrer" className="flex items-center space-x-2 text-white text-opacity-50 duration-300 hover:text-opacity-100"><span className="relative flex-none  h-5 w-5  md:h-6 md:w-6"><img alt='...' src="https://homepage.momocdn.net/img/momo-amazone-s3-api-240810203448-638589188881279737.svg" className="absolute inset-0" /></span><span className="block ">Bảo hiểm Ô tô</span></a></div>
                        </div>
                    </div>
                    <div className="col-span-2 grow border-t border-gray-700 pt-5 sm:col-span-1 md:border-none md:pt-0">
                        <div className="border-b border-gray-700 pb-5 md:border-0 md:pb-0">
                            <div className="whitespace-nowrap text-xs font-bold uppercase text-white text-opacity-80">
                                Chăm sóc khách hàng
                            </div>
                            <div className="mt-2 text-sm md:mt-3">
                                <span className="text-white text-opacity-50">Địa chỉ : </span>
                                <span className="inline text-white text-opacity-70 duration-300 hover:text-opacity-100">
                                    Lầu 6, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn Thái, khu phố 1, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh
                                </span>
                            </div>
                            <div className="mt-1 text-sm">
                                <span className="text-white text-opacity-50">Hotline : </span>
                                <a className="inline text-white text-opacity-70 duration-300 hover:text-opacity-100" href="tel:1900545441">
                                    1900 5454 41
                                </a>
                                <small className="text-xs italic text-white text-opacity-60">
                                    (Phí 1.000đ/phút)
                                </small>
                            </div>
                            <div className="mt-1 text-sm">
                                <span className="text-white text-opacity-50">Email : </span>
                                <a className="inline text-white text-opacity-70 duration-300 hover:text-opacity-100" href="mailto:hotro@momo.vn">
                                    hotro@momo.vn
                                </a>
                            </div>
                            <div className="mt-1 text-sm">
                                <span className="text-white text-opacity-50">Tổng đài gọi ra :</span>
                                <a className="inline text-white text-opacity-70 duration-300 hover:text-opacity-100" href="tel:02873065555">
                                    028.7306.5555
                                </a>
                                <span className="text-white text-opacity-60"> - </span>
                                <a className="inline text-white text-opacity-70 duration-300 hover:text-opacity-100" href="tel:02899995555">
                                    028.9999.5555
                                </a>
                                <span className="text-white text-opacity-60"> - </span>
                                <a className="inline text-white text-opacity-70 duration-300 hover:text-opacity-100" href="tel:02855555555">
                                    028.5555.5555
                                </a>
                                <span className="text-white text-opacity-60">, các đầu số di động Brandname MoMo</span>
                            </div>
                            <div className="mt-3 flex">
                                <a
                                    href="https://www.momo.vn/huong-dan/huong-dan-gui-yeu-cau-ho-tro-bang-tinh-nang-tro-giup"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <div className="relative block overflow-hidden rounded border border-gray-400 bg-black py-1 pl-10 pr-2">
                                        <div className="absolute left-1 top-1" style={{ paddingTop: '3px' }}>
                                            <svg className="h-7 w-7 text-gray-100" fill="currentColor" stroke="currentColor" viewBox="0 0 345.1 512">
                                                <g>
                                                    <title>Asset 1</title>
                                                    <path d="M279.4,23.7H30.8C14.5,23.7,0,38.2,0,56.3v401.8c0,16.3,14.5,30.8,30.8,30.8H76h23.8L76,449.4H34.5V96.2h243.1v152l34.5,22V56.3C312,38.2,297.5,23.7,279.4,23.7z M226.8,77.1H86.1c-8.1,0-13.5-5.4-13.5-13.5c0-8.1,5.4-13.5,13.5-13.5h140.8c5.4,0,10.8,5.4,10.8,13.5C237.7,71.7,232.3,77.1,226.8,77.1z" />
                                                    <path d="M189.4,200.7c-14.4,0-25.9,11.6-25.9,25.9v155.7l-17.3-34.6c-14.2-26.3-28.1-23.6-38.9-17.3c-12.5,8.3-17.2,17-8.6,38.9c19.6,48.2,49.8,105.6,82.2,142.7h116.7c41-30.4,74-175,17.3-181.6c-5.2,0-13.5,0.8-17.3,4.3c0-17.3-15.1-21.7-21.6-21.6c-7.5,0.1-13,4.3-17.3,13c0-17.3-14.1-21.6-21.6-21.6c-8.3,0-17.9,5.2-21.6,13v-90.8C215.4,212.3,203.8,200.7,189.4,200.7z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="text-xs text-white text-opacity-70">Hướng dẫn trợ giúp trên</div>
                                        <div className="text-xs font-bold uppercase text-white text-opacity-90">Ứng dụng MoMo</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 gap-8 sm:col-span-1 md:mt-0 md:flex md:flex-col md:flex-wrap md:justify-between ">
                        <div className="h-auto">
                            <div className="hidden whitespace-nowrap text-xs font-bold uppercase text-white text-opacity-80 md:block">Kết nối với chúng tôi</div>
                            <div className="mt-3 hidden flex-row items-stretch md:flex">
                                <ul className="item-center flex list-none flex-wrap space-x-4">
                                    <li className="inline-block">
                                        <a href="https://www.facebook.com/vimomo" target="_blank" rel="noreferrer" className="duration-300 hover:brightness-125">
                                            <img alt='...' src="https://homepage.momocdn.net/styles/desktop/images/social/facebook.svg" loading="lazy" width={40} height={40} />
                                        </a>
                                    </li>
                                    <li className="inline-block">
                                        <a href="https://www.linkedin.com/company/momo-mservice/" target="_blank" rel="noreferrer" className="duration-300 hover:brightness-125">
                                            <img alt='...' src="https://homepage.momocdn.net/styles/desktop/images/social/linkedin.svg" loading="lazy" width={40} height={40} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer