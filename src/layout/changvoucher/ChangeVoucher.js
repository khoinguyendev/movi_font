import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { port } from '../../port/config';
import LoadingContent from '../../global/components/LoadingContent';
import toast from 'react-hot-toast';
const ChangeVoucher = () => {
    const [items, setItems] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [data, setData] = useState('');
    const [score, setScore] = useState(0);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${port.ip}/voucher/get-font`);
                const response2 = await axios.get(`${port.ip}/auth/profile`);
                setItems(response.data.data);
                setScore(response2.data.data.score);
            } catch (error) {
                console.error('Error fetching data:', error);
                setItems([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    const handleShow = (data) => {
        setData(data)
        setQuantity(1);
        setShow(true);

    }
    const handleDoi = async () => {
        console.log(quantity * data.score)
        if (quantity < 1) {
            alert("Số lượng lớn hơn 1");
            return;
        }
        if (quantity * data.score > score) {
            alert("Bạn không đủ điểm để đổi vé");
            return;
        }
        if (quantity > data.usageLimit - data.usageCount) {
            alert("Vượt quá giới hạn");
            return;
        }
        setIsLoading(true);

        try {
            const response = await axios.post(`${port.ip}/user-voucher/change`, {
                voucher: data,
                quantity: quantity
            });
            setQuantity(1);
            toast.success('Thêm thành công');
            setShow(false);
            setScore(score - data.score * quantity);
        } catch (error) {
            toast.error("Lỗi!!");
        } finally {
            setIsLoading(false);
        }
    }
    if (isLoading) return <LoadingContent />
    return (
        <div className=" bg-gray-100">
            <div className="container mx-auto py-8">

                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <div className='font-bold mb-2'>Điểm của bạn: {score}</div>
                    <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
                        {items.map((item) => <p key={item.id} className="block w-1/3 py-3 text-center border lg:w-1/4">
                            <div>
                                {/* <img src="https://redpixelthemes.com/assets/images/icon-portfolio-green.svg" className="block mx-auto" /> */}
                                <p className="pt-2 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-3">
                                    {item.code}
                                </p>
                                <p className='text-green-900'>{item.discountType == "FIXED" ? `Giảm: ${item.discountAmount}đ` : `Giảm: ${item.discountAmount}%`}</p>
                                <p className='text-green-900'>Còn lại: {item.usageLimit - item.usageCount}</p>
                                <p className='text-green-900'>Điểm cần: {item.score}</p>
                                {score >= item.score && <button onClick={() => handleShow(item)} className='px-2 py-2 bg-blue-700 rounded text-white'>Đổi mã</button>
                                }
                            </div>
                        </p>)}

                    </div>


                </div>
            </div>
            {show &&
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">

                        <label>Số lượng: </label>
                        <input className="mt-1 mb-3  block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => setQuantity(e.target.value)} value={quantity} type='number' min={1} max={data.usageLimit - data.usageCount} />
                        <div>                        <button onClick={handleDoi} className='px-2 me-3 py-2 bg-blue-700 rounded text-white'>Đổi</button>
                            <button onClick={() => setShow(false)} className='px-2 py-2 bg-blue-700 rounded text-white'>Đóng</button>

                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default ChangeVoucher