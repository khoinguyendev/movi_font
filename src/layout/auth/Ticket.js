import React, { useEffect, useState } from 'react'
import { port } from '../../port/config';
import LoadingContent from '../../global/components/LoadingContent';
import axios from 'axios';
import QRCodeDisplay from '../../global/modal/QRCodeDisplay';

const Ticket = () => {


    const [isLoading, setIsLoading] = useState(true);
    const [tickets, setTickets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [qrData, setQRData] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${port.ip}/qrcode`,
                );
                setTickets(response.data.data);
                console.log(response.data.data);
            } catch (error) {

            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    function formatDate(isoString) {
        const date = new Date(isoString);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }
    const hanldeCreateQR = (data) => {
        setQRData(data)
        setShowModal(true)
    }
    if (isLoading) return <LoadingContent />;
    return (
        <>
            {tickets.map((ticket) => {
                console.log(ticket);
                const qrdata = JSON.parse(ticket.qrData)
                return (
                    <div className="flex bg-[#f0feff] mb-4 ">
                        <div className="max-w-full rounded-lg w-[100%] overflow-hidden bg-white shadow-[0_0_1rem_rgba(0,0,0,0.2)] ">
                            <div className="card">
                                <div className="grid grid-cols-7">
                                    <div className="col-span-2 p-3 flex justify-center">
                                        <img className='object-cover' style={{ height: 180, width: 135 }} src={ticket.showtime.movie.poster.slice(0, 4) == "http" ? ticket.showtime.movie.poster : `${port.ip}/uploads/movies/${ticket.showtime.movie.poster}`} alt="demo" />
                                    </div>
                                    <div className="col-span-5 p-3">
                                        <div className="font-bold">Phim: {qrdata.Phim}</div>
                                        <div className="mb-3 text-gray-500">Ngày đặt: {formatDate(ticket.createdAt)}</div>
                                        <div className="card flex justify-between items-center text-gray-500 bg-gray-200 focus:bg-white rounded-lg p-2">
                                            <div className="text-center">
                                                <p className="text-sm">Xuất chiếu</p>
                                                <p className="font-bold text-gray-800">{qrdata["Xuất chiếu"]}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-sm">Ghế</p>
                                                <p className="font-bold text-gray-800">{qrdata["Ghế"]}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-sm">Giá</p>
                                                <p className="font-bold text-gray-800 flex gap-1">

                                                    {qrdata["Giá"]}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 gap-2">
                                            <button onClick={() => hanldeCreateQR(ticket.id)} className="bg-white text-gray-500 py-2 px-4 rounded-lg border-2 hover:bg-gray-400 flex-1">
                                                Lấy Mã QR
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
            {showModal && <QRCodeDisplay handleClose={() => setShowModal(false)} qrData={qrData} iconSrc="https://i.pinimg.com/236x/cf/80/ce/cf80ce632b9495158be042430b47370d.jpg" />}
        </>


    )
}

export default Ticket