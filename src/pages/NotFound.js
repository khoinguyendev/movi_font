import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex items-center justify-center py-32 md:py-44"><div className="mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-8"><div className="mb-4 text-center text-8xl font-bold text-gray-200 md:text-9xl">404</div><h1 className="mb-4 text-center text-3xl font-bold md:text-4xl">Page Not Found</h1><div className="mx-auto max-w-2xl text-center text-sm text-gray-500 md:text-base">Xin lỗi, trang bạn đang tìm kiếm không tồn tại!</div><div className="mx-auto mt-7 text-center "><Link to="/" className="inline-flex items-center rounded bg-pink-700 px-5 py-2 text-white "><svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>Quay lại trang chủ</Link></div></div></div>
    )
}

export default NotFound