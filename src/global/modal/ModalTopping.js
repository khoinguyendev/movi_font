import React, { useEffect, useState } from 'react';
import LoadingContent from '../components/LoadingContent';
import { port } from '../../port/config';
import axios from 'axios';
import ModalThanhToan from '../components/ModalThanhToan';

const ModalTopping = ({ showtimeId, cinemaName, address, subtitleType, hall, timeStart, movie, setShowModalTopping, places, totalPriceSeat }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [toppings, setToppings] = useState([]);
    const [addToppings, setAddToppings] = useState([]);
    const [showModalThanhToan, setShowModalThanhToan] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${port.ip}/topping`);
                setToppings(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setToppings([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleClose = () => {
        setShowModalTopping(false);
    };

    const tang = (item) => {
        if (getQuantity(item.id) > 7) {
            alert('Sản phẩm đã đạt giới hạn tối đa!');
            return;
        }
        setAddToppings((prev) => {
            const existingItem = prev.find((t) => t.id === item.id);
            if (existingItem) {
                return prev.map((t) =>
                    t.id === item.id ? { ...t, quantity: t.quantity + 1 } : t
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const giam = (item) => {
        setAddToppings((prev) =>
            prev
                .map((t) =>
                    t.id === item.id ? { ...t, quantity: t.quantity - 1 } : t
                )
                .filter((t) => t.quantity > 0)
        );
    };

    const getQuantity = (id) => {
        const topping = addToppings.find((t) => t.id === id);
        return topping ? topping.quantity : 0;
    };

    const totalPrice = addToppings.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (isLoading) return <LoadingContent />;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-full overflow-hidden">
                <div
                    aria-modal="true"
                    role="dialog"
                    tabIndex={-1}
                    aria-label="content"
                    className="relative flex flex-col rounded-md shadow-xl bg-white"
                >
                    {/* Modal Header */}
                    <div className="relative flex items-center bg-pink-600 px-4 py-3">
                        <svg
                            onClick={handleClose}
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
                            Combo - Bắp nước
                        </b>
                    </div>

                    {/* Modal Content */}
                    <div className="flex-1 overflow-y-auto px-4 max-h-[400px]">
                        {toppings.map((item) => (
                            <div
                                key={item.id}
                                className="flex space-x-4 border-b border-gray-200 py-4 text-sm last:border-b-0"
                            >
                                <div className="relative aspect-[3/4] h-fit w-24 shrink-0 overflow-x-hidden rounded-md">
                                    <img
                                        src={`${port.ip}/uploads/topping/${item.image}`}
                                        alt={item.name}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <ul>
                                    <li className="text-base">
                                        <b>
                                            {item.name} -{' '}
                                            {item.price.toLocaleString(
                                                'vi-VN'
                                            )}
                                            đ
                                        </b>
                                    </li>
                                    <li
                                        className="text-gray-600"
                                        style={{ whiteSpace: 'pre-wrap' }}
                                    >
                                        {item.description}
                                    </li>
                                    <li className="mt-1 flex items-center space-x-2">
                                        <svg
                                            onClick={() => giam(item)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-7 cursor-pointer text-gray-400"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-300">
                                            <b>{getQuantity(item.id)}</b>
                                        </span>
                                        <svg
                                            onClick={() => tang(item)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            aria-hidden="true"

                                            className="h-7 cursor-pointer text-pink-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Modal Footer */}
                    <div className="shrink-0 border-t border-gray-200 px-4 pb-4">
                        <div className="my-3 flex items-center justify-between space-x-3">
                            <span className="text-md lg:text-base">
                                Tổng cộng
                            </span>
                            <b className="text-lg">
                                {totalPrice.toLocaleString('vi-VN')}đ
                            </b>
                        </div>
                        <button onClick={() => setShowModalThanhToan(true)}
                            type="button"
                            className="relative mx-auto flex items-center justify-center btn-primary h-12 w-full px-8 text-md hover:bg-pink-500"
                        >
                            <div>Tiếp tục</div>
                        </button>
                    </div>
                </div>
            </div>
            {showModalThanhToan && <ModalThanhToan showtimeId={showtimeId} cinemaName={cinemaName} address={address} movie={movie} subtitleType={subtitleType} hall={hall} timeStart={timeStart} places={places} addToppings={addToppings} totalPriceSeat={totalPriceSeat} totalTopping={totalPrice} setShowModalThanhToan={setShowModalThanhToan} />}

        </div>
    );
};

export default ModalTopping;
