import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingContent from '../../../global/components/LoadingContent';
import axios from 'axios';
import { port } from '../../../port/config';

const Comment = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const { id } = useParams(); // Retrieve the 'id' parameter from the URL
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.post(`${port.ip}/review/by-movie`, {
                    movieId: id
                });
                console.log(response.data);
                setData(response.data.data)
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng trong JavaScript bắt đầu từ 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    if (isLoading) return <LoadingContent />;
    return (
        <section className='border-t border-gray-200 pb-8 pt-4 md:py-8'>

            <h3 className=" mb-3 text-xl font-bold">Bình luận từ người xem</h3>
            {data?.totalReviews > 0 ?
                <div>
                    <div className="relative mb-1 flex items-center  font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className=" h-9 w-9 text-yellow-400"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <div className="pl-2 pr-0.5 text-3xl text-gray-600 sm:text-4xl">{data.averageRating}</div>
                        <div className="mr-1 self-end pb-1 text-sm font-normal text-gray-600">/10</div>
                        <div className="self-end pb-1 text-sm font-normal text-gray-600"> · {data.totalReviews} đánh giá</div>
                    </div>
                    <div className='grid grid-cols-1 divide-y divide-gray-200'>
                        {data.reviews?.map((review) =>
                            <div className='relative w-full py-5'>
                                <div className="relative flex items-center">
                                    <img src="https://avatar.momocdn.net/avatar/d387/de3188c09a733e5defcd35a23134d57d5b41ab8c29cc58f09d81ae5ede6b.png" alt="Ngô Hoàng Trung" width={44} height={44} loading="lazy" className="jsx-3193223b38bb920c z-2 overflow-hidden rounded-full object-cover  h-9 w-9" />
                                    <div className=" name-firstcase z-1 absolute flex items-center justify-center overflow-hidden rounded-full bg-gray-200  font-bold  text-gray-500   h-9 w-9 text-lg">{review.user.username.slice(0, 1).toUpperCase()}</div>
                                    <div className="ml-2 sm:ml-3">
                                        <div className="text-md  text-gray-800">{review.user.username}</div>
                                        <div className="mt-0.5 flex items-center">
                                            <div className="text-xs text-gray-500">{formatDate(review.createdAt)}</div>
                                            <div className="  flex items-center pl-2 text-xs text-pink-500 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mr-1 h-4 w-4">
                                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg> Đã mua vé
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute right-1 top-0">
                                        <img alt src="https://homepage.momocdn.net/img/momo-upload-api-230629163313-638236531936463134.png" className="w-5" loading="lazy" />
                                    </div>
                                </div>
                                <div className='relative mt-3'>
                                    <div className=" flex  items-center text-md -ml-1  mb-0.5 font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-yellow-400"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg><span className="pl-0.5">{review.rating}/10</span><span> &nbsp;· Chưa ưng lắm</span> </div>
                                    <div className="text-md whitespace-pre-wrap break-words leading-relaxed text-gray-700">{review.content}</div>
                                    {
                                        review.images && <div className="relative mt-4 w-full ">
                                            <div className="grid gap-0.5 overflow-hidden  rounded-xl md:grid-cols-4 md:gap-2 md:rounded-none grid grid-cols-2 grid-rows-2  overflow-hidden md:grid-rows-1">
                                                {JSON.parse(review.images).map((image) =>
                                                    <div className="aspect-w-4 relative cursor-pointer overflow-hidden md:aspect-w-4 md:aspect-h-3 md:rounded aspect-h-6 row-span-2">
                                                        <img alt src={`${port.ip}/uploads/comment/${image}`} className="absolute inset-0 object-cover" loading="lazy" />
                                                    </div>

                                                )}
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        )}


                    </div>
                    <div className="mb-3 mt-1 text-center"><button type="button" className="rounded-full border border-pink-500 bg-white/10 py-1 pl-4 pr-6 font-semibold text-pink-500  transition-all hover:text-pink-600"><svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline-block h-4 w-4 animate-bounce opacity-80" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" fillRule="evenodd" clipRule="evenodd" /></svg>Xem tiếp nhé!</button></div>

                </div> : "Hiện chưa có bình luận nào"
            }
        </section>
    )
}

export default Comment