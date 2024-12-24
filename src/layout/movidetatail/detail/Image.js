import React from 'react'
import { useDispatch } from 'react-redux';
import { setModalTrailer } from '../../../redux/modalTrailerSlice';
import { port } from '../../../port/config';

const Image = ({ data }) => {
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(setModalTrailer({ isOpen: true, item: data }));

    }
    return (
        <div class=" cine__hero__poster relative mb-4 w-full md:mb-0 md:w-auto">
            <div class="  w-28  md:mx-auto md:w-64">
                <div class="after:z-1 flex overflow-hidden  border border-white/20   md:relative  ">
                    <div class="aspect-w-7 aspect-h-10 w-full">
                        <img className='object-cover' alt={data.title} src={data.poster.slice(0, 4) == "http" ? data.poster : `${port.ip}/uploads/movies/${data.poster}`} loading="lazy" />
                    </div>
                    <div onClick={openModal} className="absolute left-1/2 top-1/2 z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer   transition-transform hover:scale-110 md:h-16 md:w-16">
                        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle stroke="#FFF" strokeWidth={2} fillOpacity=".24" fill="#000" cx={24} cy={24} r={23} />
                            <path d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z" fill="#FFF" fillRule="nonzero" /></g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image