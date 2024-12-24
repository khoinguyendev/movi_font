import React, { useEffect, useState } from 'react'
import formatShowtimeData from '../../helper/FormatXuatChieu';
import formatNgay from '../../helper/FormatNgay';
import axios from 'axios';
import { port } from '../../port/config';
import LoadingContent from './LoadingContent';

const ModalThanhToan = ({ showtimeId, cinemaName, address, subtitleType, hall, timeStart, movie, places, setShowModalThanhToan, addToppings, totalTopping, totalPriceSeat }) => {
    const [total, setTotalPrice] = useState(() => totalTopping + totalPriceSeat)
    const [isLoading2, setIsLoading2] = useState(false);
    const [listVoucher, setListVoucher] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [giam, setGiam] = useState(false);
    const [voucher, setVoucher] = useState(0);
    const [payment, setPayment] = useState("")
    const hanldeBook = async () => {
        if (payment == "") {
            alert("Vui lòng chọn phương thức thanh toán!")
            return;
        }
        const data = places.map((place) => ({
            seat: { id: place.id, seatNumber: place.seatNumber },
        }));

        try {
            setIsLoading2(true);
            if (payment == "momo") {
                const response = await axios.post(`${port.ip}/tickets`, {
                    showtimeId: showtimeId,
                    tickets: data,
                    price: total
                });

                // Redirect to the payment URL
                window.location.href = response.data.data.payUrl;
            } else {
                const response = await axios.post(`${port.ip}/tickets/zalo`, {
                    showtimeId: showtimeId,
                    tickets: data,
                    price: total
                });
                window.location.href = response.data.data.order_url;

            }

        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading2(false);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {

                const response2 = await axios.get(`${port.ip}/user-voucher`);
                setListVoucher(response2.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    const onOptionChange = e => {
        setPayment(e.target.value)
    }
    const hanldeDiscount = () => {
        const fetchData = async () => {
            setIsLoading2(true);
            try {

                const response2 = await axios.get(`${port.ip}/voucher/check/${voucher}`);
                if (response2.data.data) {
                    setGiam(true);
                    if (response2.data.data.discountType == "FIXED") {
                        console.log(total);
                        setTotalPrice(totalPriceSeat + totalTopping - response2.data.data.discountAmount);
                    } else {
                        setTotalPrice(Math.round((totalPriceSeat + totalTopping) - ((totalPriceSeat + totalTopping) * response2.data.data.discountAmount / 100)));
                    }

                } else {
                    setGiam(false);
                    setTotalPrice(totalPriceSeat + totalTopping);
                }

                console.log(response2.data.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading2(false);
            }
        };
        fetchData();
    }
    if (isLoading) return <LoadingContent />
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-full overflow-hidden">
                <div aria-modal="true" role="dialog" tabIndex={-1} aria-label="content" className="modalFadeUp modal-cluster max-h-modal relative flex max-h-full w-full max-w-full flex-col rounded-t-xl shadow-xl md:rounded-xl md:h-auto md:max-w-3xl bg-white" data-reach-dialog-content>
                    <div className="relative flex items-center bg-pink-600 px-4 py-3">
                        <svg
                            onClick={() => setShowModalThanhToan(false)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="absolute left-3 h-6 cursor-pointer text-white transition-all hover:opacity-70"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <b className="grow text-center text-white">
                            Thanh Toán
                        </b>
                    </div>
                    <div className="modal-body  overflow-y-auto px-4 max-h-[650px] overflow-auto rounded bg-white p-0">
                        <div className="flex flex-col md:flex-row">
                            <div className="order-2 mx-auto grow px-6 py-5 md:order-1">
                                <div>
                                    <ul className="flex items-center space-x-2">
                                        {/* <li className="origin-left scale-90">
                                            <div className="jsx-83755f2b759333b1 inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white text-opacity-95 cinema-rate-orange !h-6 w-10 justify-center rounded-2xl" style={{ minWidth: 20 }}>C16</div>
                                        </li> */}
                                        <li className="md:text-lg">
                                            <b>{movie.title}</b>
                                        </li>
                                    </ul>
                                    <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-4 border-t border-dashed border-gray-200 pt-4">
                                        <li className="flex items-end justify-between space-x-10"><div><span className="block font-semibold text-gray-500" style={{ fontSize: 11 }}>THỜI GIAN</span>
                                            <div className="text-gray-800"><b>{formatShowtimeData(timeStart, movie.duration)}</b>
                                            </div>
                                        </div>
                                        </li>
                                        <li className="flex items-end justify-between space-x-10">
                                            <div>
                                                <span className="block font-semibold text-gray-500" style={{ fontSize: 11 }}>NGÀY CHIẾU</span>
                                                <div className="text-gray-800"><b>{formatNgay(timeStart)}</b>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-end justify-between space-x-10 col-span-2">
                                            <div>
                                                <span className="block font-semibold text-gray-500" style={{ fontSize: 11 }}>RẠP</span>
                                                <div className="text-gray-800"><b>{cinemaName}</b>
                                                </div>
                                                <div className="text-sm text-gray-500">{address}</div>
                                            </div>
                                        </li>
                                        <li className="flex items-end justify-between space-x-10"><div>
                                            <span className="block font-semibold text-gray-500" style={{ fontSize: 11 }}>PHÒNG CHIẾU</span>
                                            <div className="text-gray-800">
                                                <b>{hall.name}</b>
                                            </div>
                                        </div>
                                        </li>
                                        <li className="flex items-end justify-between space-x-10">
                                            <div>
                                                <span className="block font-semibold text-gray-500" style={{ fontSize: 11 }}>ĐỊNH DẠNG</span>
                                                <div className="text-gray-800">
                                                    <b>{subtitleType.name}</b>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="mt-4 border-t border-dashed border-gray-200 pt-4">
                                        <li className="flex items-end justify-between space-x-10 col-span-2"><div><span className="block font-semibold text-gray-500" style={{ fontSize: 11 }}>GHẾ</span>
                                            <div className="text-gray-800">
                                                <b>{places.map((seat) => seat.seatNumber).join(', ')}</b>
                                            </div>
                                        </div>
                                            <div className="text-gray-800">
                                                <b>{totalPriceSeat.toLocaleString('vi-VN')}đ</b>
                                            </div>
                                        </li>
                                        <div className="mt-5">
                                            {addToppings.map((item, index) =>
                                                <li key={item.id} className="flex items-end justify-between space-x-10 col-span-2">
                                                    <div>
                                                        {index == 0 && <span className="block font-semibold text-gray-500" style={{ fontSize: 11 }}>BẮP - NƯỚC</span>
                                                        }
                                                        <div className="text-gray-800">
                                                            <b>{item.quantity} x {item.name}</b>
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-800">
                                                        <b>{item.price.toLocaleString('vi-VN')}đ</b>
                                                    </div>
                                                </li>
                                            )}


                                        </div>
                                    </ul>
                                    <ul className='mt-4 border-t border-dashed border-gray-200 pt-4'>
                                        <li><b>Voucher của bạn</b></li>
                                        <li>
                                            <select
                                                name="areaId"
                                                value={voucher}
                                                onChange={(e) => setVoucher(e.target.value)}
                                                className="mt-1 block w-full p-2 border rounded-md"
                                            >
                                                <option value={0}>Chọn voucher</option>
                                                {listVoucher.map((item) => (
                                                    <option value={item.voucher.id}>{item.voucher.code} - {item.voucher.discountType == "FIXED" ? `Giảm ${item.voucher.discountAmount}đ` : `Giảm ${item.voucher.discountAmount}% giá trị đơn hàng`}</option>
                                                ))}
                                            </select>
                                        </li>
                                        {voucher != 0 && <li><button disabled={isLoading2} onClick={hanldeDiscount} className='my-3 text-white rounded px-3 py-2 bg-blue-700'>Áp dụng</button></li>}
                                    </ul>
                                    <ul className='mt-1 border-t border-dashed border-gray-200 pt-4'>
                                        <li><b>Phương thức thanh toán</b></li>
                                        <li>
                                            <div>
                                                <div className='flex'>
                                                    <input onChange={onOptionChange} value={'momo'} checked={payment == "momo"} type="radio" id="momo" name="age" />
                                                    <label className='ms-1' htmlFor="momo"><img height={40} width={40} src='https://developers.momo.vn/v3/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png' /></label><br />

                                                </div>
                                                <div className='flex'>
                                                    <input onChange={onOptionChange} value={'zalopay'} checked={payment == "zalopay"} type="radio" id="zalopay" name="age" />
                                                    <label className='ms-2' htmlFor="zalopay"><img height={30} width={30} src='https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png' /></label><br />
                                                </div>
                                            </div>

                                        </li>
                                    </ul>
                                    <ul className="mt-4 border-t border-dashed border-gray-200 pt-4"><li className="flex items-end justify-between space-x-10"><div><div className="text-gray-800"><b>Tạm tính</b></div></div><div className="text-gray-800"><b>{(total).toLocaleString('vi-VN')}đ</b></div></li></ul>
                                </div>

                                <button
                                    onClick={hanldeBook}
                                    disabled={isLoading2}
                                    type="button"
                                    className="mt-4 relative mx-auto flex items-center justify-center btn-primary h-12 w-full px-8 text-md hover:bg-pink-500"
                                >
                                    <div>{isLoading2 ? "Đang xử lí" : "Thanh Toán"}</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalThanhToan
