import React, { useEffect, useState } from 'react'

import { port } from '../../port/config';
import axios from 'axios';
import formatDate from '../../helper/FormatDay';
import { Link } from 'react-router-dom';
import LoadingContent from '../../global/components/LoadingContent';
const Voucher = () => {
    const [items, setItems] = useState([]);
    const [voucher, setVoucher] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [score, setScore] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${port.ip}/user-point`);
                const response2 = await axios.get(`${port.ip}/user-voucher`);
                const response3 = await axios.get(`${port.ip}/auth/profile`);
                setItems(response.data.data);
                console.log(response.data.data)
                setVoucher(response2.data.data);
                setScore(response3.data.data.score);
            } catch (error) {
                console.error('Error fetching data:', error);
                setItems([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    if (isLoading) return <LoadingContent />
    return (
        <>
            <div className='font-bold mb-3'>
                Điểm của bạn: {score}
                <Link to={'/change-voucher'} className=' ms-5 px-2 py-2 bg-blue-700 text-white rounded'>Đổi voucher</Link>
            </div>
            <div className='font-bold'>Lịch sử giao dịch:</div>
            <table className="border-collapse border border-slate-500 table-auto mb-3">
                <thead>
                    <tr>
                        <th className="border border-slate-600 px-3">Ngày</th>
                        <th className="border border-slate-600 px-3">Giao dịch</th>
                        <th className="border border-slate-600 px-3">Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => <tr>
                        <td className="border border-slate-700 px-3">{formatDate(item.createdAt)}</td>
                        <td className={`border border-slate-700 px-3 ${item.transactionType == "EARNED" ? 'text-green-600' : 'text-red-500'}`}>{item.transactionType == "EARNED" ? '+' : '-'}{item.points}</td>
                        <td className="border border-slate-700 px-3">{item.description}</td>
                    </tr>)}

                </tbody>
            </table>
            <div className='font-bold'>Voucher của bạn:</div>
            <table className="border-collapse border border-slate-500 table-auto mb-3">
                <thead>
                    <tr>
                        <th className="border border-slate-600 px-3">Mã</th>
                        <th className="border border-slate-600 px-3">Loại</th>
                        <th className="border border-slate-600 px-3">Ngày bắt đầu</th>
                        <th className="border border-slate-600 px-3">Ngày kết thúc</th>
                        <th className="border border-slate-600 px-3">Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {voucher.map((item) => <tr>
                        <td className="border border-slate-700 px-3">{item.voucher.code}</td>
                        <td className="border border-slate-700 px-3">{item.voucher.discountType == "FIXED" ? `Giảm ${item.voucher.discountAmount}đ` : `Giảm ${item.voucher.discountAmount}% giá trị đơn hàng`}</td>
                        <td className="border border-slate-700 px-3">{new Date(item.voucher.startDate).toLocaleDateString('vi-VN')}</td>
                        <td className="border border-slate-700 px-3">{new Date(item.voucher.expiryDate).toLocaleDateString('vi-VN')}</td>
                        <td className="border border-slate-700 px-3">{item.quantity}</td>

                    </tr>)}

                </tbody>
            </table>
        </>
    )
}

export default Voucher