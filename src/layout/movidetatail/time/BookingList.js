import React from 'react'
import CinemaDetail from './CinemaDetail'
import CinemaNotfound from './CinemaNotfound'


const BookingList = ({ movieId, duration, data }) => {


    return (
        <div>
            <div className='normal-accordion divide-y divide-gray-200'>
                {data.length > 0 ? data.map((item) => {
                    return <div key={item.id}>
                        <CinemaDetail movieId={movieId} data={item} duration={duration} />
                    </div>
                })
                    : <CinemaNotfound />
                }

            </div>

        </div>
    )
}

export default BookingList