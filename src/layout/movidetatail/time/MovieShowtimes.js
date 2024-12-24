import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import Comment from './Comment'
import Topphim from './Topphim'
import { useSelector } from 'react-redux'
import ModalComent from '../../../global/modal/ModalComent'

const MovieShowtimes = ({ name, movieId, duration }) => {
    const user = useSelector((state) => state.user.items);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        setShowModal(false);
    }
    return (
        <div className='mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-8'>
            <div id='phimLichChieu' className="-mt-16 grid grid-cols-1 pt-16 lg:grid-cols-3 lg:gap-12">
                <div className='lg:col-span-2 lg:col-start-1'>
                    <Left name={name} movieId={movieId} duration={duration} />
                    <div className='mb-2 flex justify-center'>
                        {user ? <button onClick={() => setShowModal(true)} className='btn-primary btn-primary-landing py-2  text-white rounded-md'>Bình luận</button> : <p className='text-center'>Đăng nhập để bình luận</p>}

                    </div>
                    <ModalComent show={showModal} handleClose={handleClose} />
                    <Comment />
                </div>
                <div className='lg:grid-start-3'>
                    <Right />
                </div>
            </div>
            <section id='topphim' className='border-t border-gray-200 py-8'>
                <Topphim />
            </section>

        </div>
    )
}

export default MovieShowtimes