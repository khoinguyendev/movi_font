import React from 'react'
import { useDispatch } from 'react-redux';
import { setModalTrailer } from '../../../redux/modalTrailerSlice';
import lableClass from '../../../helper/lableClass';

const Right = ({ data }) => {
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(setModalTrailer({ isOpen: true, item: data }));

    }
    return (

        <div className="relative z-10 w-full md:w-auto">
            {data.label && <div style={{ minWidth: 20 }} className={`inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white text-opacity-95  ${lableClass[data.label].class}`} > {lableClass[data.label].text}</div>}
            <h1 className=" mt-2 text-2xl font-bold text-white md:text-4xl">{data.title}</h1>
            <ul className=" mt-1 flex flex-wrap items-center text-sm text-white text-opacity-60 md:text-base">
                <li >Amazon Bullseye</li>
                <li className=" mx-2 text-base font-normal">·</li>
                <li >2024</li>
                <li className=" mx-2 text-base font-normal">·</li>
                <li >{data.duration} phút</li>
            </ul>
            <div className=" flex flex-nowrap items-center space-x-2 overflow-x-auto overflow-y-hidden pb-2 pt-2 text-sm sm:pt-3 md:space-x-3 md:text-base">
                <div className="cine__score   mr-2 flex shrink-0 flex-nowrap items-center space-x-0.5 pb-1">
                    <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-240920155046-638624442462410376.png" alt="icon-rating-Đáng xem" className="h-8 w-8 shrink-0 object-cover" width={36} height={36} />
                    <div className="flex  items-center space-x-1  text-xl">
                        <div className="text-2xl font-bold">8.3</div>
                    </div>
                </div>
            </div>
            {/* <div className="relative mb-3 mt-1 max-w-xl rounded-lg bg-pink-50 px-4 py-3 transition-all opacity-100">
                <svg className="absolute -top-2 left-3 w-4" fill="none" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L13.0622 7.5H0.937822L7 0Z" fill="#FFEFF8" />
                </svg>
                <div className="tracking-snapshot-close absolute right-0 top-0 flex h-9 w-9 cursor-pointer items-center justify-center text-gray-700 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12">
                    </path>
                    </svg>
                </div>
                <div className="text-md pr-6 font-normal leading-6 text-gray-900">
                    Phim nhận được huy hiệu
                    <span className="font-bold">Đáng xem</span>
                    với điểm trung bình 8.3 từ 1483 khán giả Việt đã mua vé trên MoMo!
                    <span className="tracking-snapshot-viewmore ml-2 cursor-pointer text-sm text-pink-600 underline hover:text-pink-500">Tìm hiểu thêm</span>
                </div>
            </div> */}
            <p className=" mb-3 italic text-white text-opacity-60">Chào mừng! Lần đầu đến Amazon hả?</p>
            <h3 className=" font-bold text-white text-opacity-90 sm:text-base">Nội dung</h3>
            <div className=" mt-1 text-sm leading-relaxed text-white text-opacity-70">
                {data.description}
                <span className="read-or-hide  cursor-pointer  pl-1 hover:underline text-yellow-300">...Xem thêm</span>
            </div>
            <div className=" mt-3 text-sm text-gray-700 ">
                <div className=" mb-2 flex flex-nowrap space-x-4 md:space-x-5">
                    <div >
                        <div className=" whitespace-nowrap text-white text-opacity-50">Ngày chiếu</div>
                        <div className=" mt-1 font-bold text-white text-opacity-90">{data.releaseDate}</div>
                    </div>
                    <div >
                        <div className=" whitespace-nowrap text-white text-opacity-50">Thể loại</div>
                        <div className=" mt-1 font-bold text-white text-opacity-90">{data.genre}</div>
                    </div>
                    <div >
                        <div className=" whitespace-nowrap text-white text-opacity-50">Quốc gia</div>
                        <div className=" mt-1 font-bold text-white text-opacity-90">{data.country}</div>
                    </div>
                </div>
            </div>
            <div className="mt-3 flex items-center space-x-4">
                <div onClick={openModal} className="tracking-click-play-trailer tracking-focus flex cursor-pointer items-center space-x-1.5 py-2 text-sm hover:underline">
                    <div className="h-6 w-6 rounded-full border-2 border-pink-600 text-white/80">
                        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd">
                            <path d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z" fill="currentColor" fillRule="nonzero" /></g>
                        </svg>
                    </div>
                    <span >Xem trailer</span>
                </div>
                <a href="/cinema/amazon-bullseye-24091/review" target="_blank" className="tracking-click-view-review tracking-focus flex items-center space-x-1.5 py-2 text-sm hover:underline">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-white/85 ">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <span>Xem review</span>
                </a>
            </div>


        </div>


    )
}

export default Right