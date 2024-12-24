import React from 'react'

const CinemaNotfound = () => {
    return (
        <div className="cinema-warning-notfound py-5 text-center"><div><img src="https://homepage.momocdn.net/next-js/_next/static/public/cinema/not-found.svg" alt="Not found" className="mx-auto block" loading="lazy" width={120} height={120} /></div><div className="mb-0 mt-3 text-lg font-semibold">Úi, Suất chiếu không tìm thấy.</div><div className="text-sm text-gray-500">Bạn hãy thử tìm ngày khác nhé</div></div>
    )
}

export default CinemaNotfound