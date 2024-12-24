import React from 'react'

const Bread = ({ name }) => {
    return (
        <div class="breadcrumb-s-viewApp relative top-0 z-30 bg-white py-3  shadow-sm md:py-4 ">
            <div class="mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-8">
                <nav aria-label="breadcrumb" class="jsx-770636686 soju-carousel">
                    <ol class="jsx-770636686 list-reset flex flex-nowrap items-center ">
                        <li class="jsx-770636686 breadcrumb-item relative shrink-0 px-3 text-sm  md:px-3 pl-0 md:pl-0 text-gray-800 hover:text-pink-700">
                            <a class=" whitespace-nowrap" aria-label="MoMo" href="https://www.momo.vn">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                            </a>
                        </li>
                        <li class="jsx-770636686 breadcrumb-item relative shrink-0 px-3 text-sm  md:px-3 text-gray-800 hover:text-pink-700">
                            <a href="/cinema" class="flex  items-center whitespace-nowrap md:space-x-2">
                                <span>Cinema</span>
                            </a>
                        </li>
                        <li class="jsx-770636686 breadcrumb-item relative shrink-0 px-3 text-sm  md:px-3 text-gray-800 hover:text-pink-700">
                            <a href="/cinema/phim-chieu" class="flex  items-center whitespace-nowrap md:space-x-2">
                                <span>Phim chiếu</span>
                            </a>
                        </li>
                        <li class="jsx-770636686 breadcrumb-item relative shrink-0 px-3 text-sm  md:px-3 text-gray-800 hover:text-pink-700">
                            <span class="flex  items-center  whitespace-nowrap  md:space-x-2 text-gray-500">
                                <span>{name}</span>
                            </span>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default Bread