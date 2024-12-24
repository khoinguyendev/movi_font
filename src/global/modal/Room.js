import React, { useEffect, useRef, useState } from 'react';
import './modal.css';
import Seat from './Seat';
import axios from 'axios';
import Loading from '../components/Loading';
import { port } from '../../port/config';
import toast from 'react-hot-toast';
import { useSelector } from "react-redux";
import lableClass from '../../helper/lableClass';
import ModalTopping from './ModalTopping';

const Room = ({ movieId, cinemaName, address, onClose, hallid, showtimeId }) => {
    const user = useSelector((state) => state.user.items);
    const [showModalTopping, setShowModalTopping] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(false);

    const [placesBookes, setPlacesBooked] = useState([]);
    const [places, setPlaces] = useState([]);
    const [scale, setScale] = useState(1);

    const [movie, setMovie] = useState("");
    const [subtitleType, SetSubtitleType] = useState("");
    const [hall, setHall] = useState([])
    const [price, setPrice] = useState(0);
    const [timeStart, setTimeStart] = useState("");

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef({ x: 0, y: 0 });


    useEffect(() => {
        // Khóa cuộn trang khi modal mở
        document.body.style.overflow = "hidden";
        return () => {
            // Khôi phục cuộn khi modal đóng
            document.body.style.overflow = "";
        };
    }, []);
    // Xử lý phóng to, thu nhỏ
    const handleWheel = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const newScale = Math.min(1.75, Math.max(0.75, scale - event.deltaY * 0.001));
        setScale(newScale);
    };

    // Bắt đầu kéo
    const handleMouseDown = (event) => {
        setIsDragging(true);
        dragStartRef.current = { x: event.clientX - position.x, y: event.clientY - position.y };
    };

    // Đang kéo
    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const newX = event.clientX - dragStartRef.current.x;
        const newY = event.clientY - dragStartRef.current.y;
        setPosition({ x: newX, y: newY });
    };

    // Kết thúc kéo
    const handleMouseUp = () => {
        setIsDragging(false);
    };
    const toggleSeat = (seat) => {
        setPlaces((prev) => {
            // Check if the seat is already selected
            const isBooked = prev.some((book) => book.id === seat.id);


            if (isBooked) {
                // If selected, remove it
                return prev.filter((selectedSeat) => selectedSeat.id !== seat.id);
            } else {
                // If not selected, add it
                return [...prev, seat];
            }
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${port.ip}/halls/${hallid}`,
                );
                const response2 = await axios.post(`${port.ip}/tickets/booked`, {
                    showtimeId: showtimeId,
                });

                setPrice(response2?.data?.data.showtime.price);
                setTimeStart(response2?.data?.data.showtime.startTime);
                setPlacesBooked(response2.data.data.seatBooked);
                setMovie(response2.data.data.showtime.movie);
                SetSubtitleType(response2?.data?.data.showtime.type);
                setHall(response.data.data);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [hallid, showtimeId]);
    const hanldeBook = () => {
        if (places.length === 0) {
            toast.error("Vui lòng chọn ít nhất 1 ghế !");
            return;
        }
        setShowModalTopping(true);
    }
    // const hanldeBook = async () => {

    //     // Kiểm tra xem có chọn ghế nào hay không
    //     if (places.length === 0) {
    //         toast.error("Vui lòng chọn ghế để đặt vé!");
    //         return;
    //     }
    //     const data = places.map((place) => ({
    //         seat: { id: place.id, seatNumber: place.seatNumber },
    //     }));        // Gửi dữ liệu đặt vé đến server
    //     try {
    //         setIsLoading2(true);
    //         const response = await axios.post(`${port.ip}/tickets`, {
    //             showtimeId: showtimeId,
    //             tickets: data
    //         });

    //         toast.success("Đặt vé thành công!");
    //         onClose();
    //     } catch (e) {
    //         toast.error("Đặt vé thất bại, vui lòng thử lại!");
    //     } finally {
    //         setIsLoading2(false);
    //     }
    // }
    // const calculateEndTime = (startTime, duration) => {

    //     const formattedStartTime = `${startTime.getHours()
    //         .toString()
    //         .padStart(2, '0')}:${startTime
    //             .getMinutes()
    //             .toString()
    //             .padStart(2, '0')}`;
    //     const start = new Date(startTime);
    //     const end = new Date(start.getTime() + duration * 60 * 1000); // duration in minutes
    //     return `${formattedStartTime} ~ ${end.getHours().toString().padStart(2, '0')}:${end.getMinutes().toString().padStart(2, '0')}`;
    // };
    const formatShowtimeData = (movie, subtitleType, hall, giochieu) => {
        const startTime = new Date(giochieu);
        const endTime = new Date(startTime.getTime() + movie.duration * 60000); // Cộng thêm thời lượng phim (phút)

        const options = { hour: '2-digit', minute: '2-digit' };
        const startFormatted = startTime.toLocaleTimeString('vi-VN', options).replace('.', ':');
        const endFormatted = endTime.toLocaleTimeString('vi-VN', options).replace('.', ':');

        const today = new Date();
        const isToday = startTime.toDateString() === today.toDateString();
        const dateFormatted = isToday
            ? 'Hôm nay'
            : `${startTime.getDate().toString().padStart(2, '0')}/${(startTime.getMonth() + 1).toString().padStart(2, '0')}`;

        const type = subtitleType.name || '';
        const room = hall.name; // Thay bằng thông tin phòng chiếu từ dữ liệu nếu có

        return `${startFormatted} ~ ${endFormatted} · ${dateFormatted} · ${room} · ${type} `;
    };
    if (isLoading) return <Loading />
    return (
        <div
            className="modal fixed inset-0 flex max-h-full flex-row justify-center bg-black bg-opacity-50 p-0 text-gray-800 sm:mt-0 md:items-center items-end modal-to-offcanvas md:p-4 film-12720"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {isLoading2 && <Loading />}
            <div className="modalFadeUp modal-cluster max-h-modal relative flex max-h-full w-full max-w-full flex-col rounded-t-xl shadow-xl md:rounded-xl md:h-auto md:max-w-4xl bg-white !h-full !md:rounded-md overflow-hidden">
                <button type="button" aria-hidden="true" className="pointer-events-none" />
                <div className="flex h-full flex-col bg-black">
                    <div onClick={onClose} className="relative flex shrink-0 items-center bg-pink-600 px-4 py-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="absolute left-3 h-6 shrink-0 cursor-pointer text-white transition-all hover:opacity-70"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <b className="grow text-center text-white">Mua vé xem phim</b>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="flex h-full flex-col overflow-hidden bg-gray-800 pb-3">
                            <div className="flex h-full overflow-hidden bg-gray-800 text-sm text-white">
                                <div
                                    className="react-transform-wrapper transform-component-module_wrapper__SPB86"
                                    style={{ maxWidth: '100%', height: '100%', maxHeight: '100%', margin: 'auto' }}
                                >
                                    <div
                                        className="react-transform-component transform-component-module_content__FBWxo"
                                        style={{
                                            padding: '0px 16px',
                                            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                                            cursor: isDragging ? 'grabbing' : 'grab',
                                        }}
                                        onWheel={handleWheel}
                                        onMouseDown={handleMouseDown}
                                    >
                                        <div className="mb-3 w-full basis-full px-20 pt-3 text-center text-white lg:mb-6 lg:px-40">
                                            <div className="mx-auto mb-1 h-1 w-64 rounded-lg bg-white" />
                                            <span className="text-xs lg:text-sm">MÀN HÌNH</span>
                                        </div>
                                        <div className="cinema-seat-chart mx-auto">
                                            <Seat diagram={JSON.parse(hall.diagram)} showtimeId={showtimeId} isLoading={isLoading2} cols={12} toggleSeat={toggleSeat} places={places} placesBooked={placesBookes} setPlacesBooked={setPlacesBooked} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 w-full px-4 text-xs text-white">
                                <div className="mx-auto grid w-fit grid-cols-3 gap-x-2 gap-y-2">
                                    <div className="flex items-center space-x-1.5">
                                        <div className="h-4 w-4 shrink-0 rounded-sm bg-gray-700" />
                                        <span>Đã đặt</span>
                                    </div>
                                    <div className="flex items-center space-x-1.5">
                                        <div className="h-4 w-4 shrink-0 rounded-sm border border-white bg-pink-600" />
                                        <span>Ghế bạn chọn</span>
                                    </div>
                                    <div className="flex items-center space-x-1.5">
                                        <div
                                            className="h-4 w-4 shrink-0 rounded-sm"
                                            style={{ backgroundColor: 'rgb(114, 46, 209)' }}
                                        />
                                        <span className="break-all">Ghế thường</span>
                                    </div>
                                    <div className="flex items-center space-x-1.5"><div className="h-4 w-4 shrink-0 rounded-sm" style={{ backgroundColor: 'rgb(245, 34, 45)' }} /><span className="break-all">Ghế VIP</span></div>
                                </div>
                                <span className="mt-2 block cursor-pointer text-center transition-all hover:opacity-70">
                                    <b>
                                        <u>Xem chi tiết</u>
                                    </b>
                                    hình ảnh và thông tin ghế
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" shrink-0">
                        <div className="rounded-t-xl bg-white px-4 py-4 sm:rounded-t-none ">
                            <div className=" grid grid-cols-1 divide-y divide-gray-200   text-sm">
                                <div className="pb-2">
                                    <div className="flex space-x-2  pb-1 ">
                                        <div className="h-fit shrink-0 scale-90">
                                            {movie.label && <div style={{ minWidth: 20 }} className={`inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white text-opacity-95  ${lableClass[movie.label].class}`} > {lableClass[movie.label].text}</div>}

                                        </div>
                                        <div>
                                            <b className="line-clamp-1 text-base md:line-clamp-none ">{movie.title}</b>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-tiny text-orange-500 lg:text-sm">
                                            {/* 22:20  ~  00:13 · Hôm nay, 25/11 · Phòng chiếu P7 · 2D Lồng tiếng */}
                                            {formatShowtimeData(movie, subtitleType, hall, timeStart)}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex  items-center justify-between space-x-3 py-1.5">
                                    <span className="shrink-0 text-gray-500">Chỗ ngồi</span>
                                    {places?.length > 0 && (
                                        <div className="flex items-center space-x-2 rounded-lg border border-gray-200 px-3 py-1">
                                            <span>{places.map((seat) => seat.seatNumber).join(', ')}</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="rgb(239 68 68)"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="h-6 shrink-0 cursor-pointer text-white transition-all hover:opacity-70"
                                                onClick={() => setPlaces([])} // Fix: Wrap in a function to prevent immediate execution
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                    )}                                </div>
                            </div>
                            <div className="flex items-center border-t border-gray-200 pt-3">
                                <div className=" flex-1">
                                    <span className="block text-sm text-gray-500 ">Tạm tính</span>
                                    <b className="text-lg d">{(places.length * price).toLocaleString("vi-VN")}đ</b>
                                </div>
                                <div className=" shrink-0">
                                    <button onClick={() => hanldeBook()} type="button" className="relative mx-auto !flex items-center justify-center btn-primary tracking-engage-btn-cineseat  h-12  w-full  !px-8 !text-md hover:bg-pink-500">
                                        <div className="pointer-events-none">Mua vé</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModalTopping && <ModalTopping showtimeId={showtimeId} cinemaName={cinemaName} address={address} movie={movie} subtitleType={subtitleType} hall={hall} timeStart={timeStart} totalPriceSeat={places.length * price} places={places} setShowModalTopping={setShowModalTopping} />}
        </div>
    );
};

export default Room;
