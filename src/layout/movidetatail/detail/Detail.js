import React from 'react'
import Image from './Image'
import Right from './Right'

const Detail = ({ data }) => {
    return (
        <div className='cine__hero relative z-10 flex items-center justify-center bg-black py-4 text-white text-opacity-95 sm:py-6'>
            <div style={{ backgroundImage: `url(${data.background})` }} className="cine__cover absolute top-0 z-0 h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat">&nbsp;</div>
            <div className='mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-8'>
                <div className='flex flex-wrap items-center md:flex-nowrap md:space-x-10 lg:items-start'>
                    <Image data={data} />
                    <Right data={data} />
                </div>
            </div>

        </div>
    )
}

export default Detail