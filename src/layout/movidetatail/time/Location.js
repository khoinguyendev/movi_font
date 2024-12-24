import React, { useEffect, useState } from 'react'
import City from '../../../global/modal/City';
import { useDispatch, useSelector } from 'react-redux';
import LoadingContent from '../../../global/components/LoadingContent';
import { setSearch } from '../../../redux/searchSlice';
import axios from 'axios';
const Location = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState("Hồ Chí Minh");
    const [areas, setAreas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('http://localhost:6969/area');

                setAreas(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setAreas([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    const [isLoading, setIsLoading] = useState(false);
    const [nearLocation, setNearLocation] = useState(false);
    // const [currentLocation, setCurrentLocation] = useState([
    //     10.83034725,
    //     106.77077958333336
    // ]);
    // const [city, setCity] = useState(filter.location);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);
    const openModal = () => {
        setNearLocation(false);
        setIsModalOpen(true);

    }
    const getCurrentLocation = () => {
        // if (navigator.geolocation) {
        //     setIsLoading(true);
        //     navigator.geolocation.getCurrentPosition(
        //         (position) => {
        //             const { latitude, longitude } = position.coords;
        //             setCurrentLocation([latitude, longitude]);
        //             getProvinceName(latitude, longitude).then((province) => {
        //                 console.log('Tên tỉnh:', province);
        //             });
        //         },
        //         (error) => {
        //             console.error('Error fetching location: ', error);
        //         },
        //     );
        //     setIsLoading(false);
        // } else {
        //     alert('Geolocation is not supported by your browser.');
        // }
        dispatch(setSearch({ near: true }));
        dispatch(setSearch({ location: 1 }));
        setNearLocation(true);
    };
    const getProvinceName = async (latitude, longitude) => {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        try {

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            // Kiểm tra và lấy tên tỉnh
            if (data && data.address) {
                return data.address.city; // Trả về tên tỉnh
            } else {
                return 'Không tìm thấy tỉnh';
            }
        } catch (error) {

            console.error('Error fetching data:', error);
            return 'Lỗi khi lấy dữ liệu';
        }
    };
    return (
        <>
            <div className="z-10 sm:absolute sm:-top-12 sm:right-0 ">
                <div className="flex items-center space-x-3">
                    <div onClick={openModal} className={`relative flex h-9  w-40 flex-none cursor-pointer flex-nowrap items-center rounded border pl-7 pr-4 text-sm font-semibold hover:bg-gray-50 md:w-40 ${!nearLocation ? 'border-pink-600 text-pink-600' : ''}`} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=" absolute left-2 top-1 mt-1 h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" className="" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" className="" /></svg>
                        <span className=" block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{city}</span><div className=" absolute right-3 md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=" h-4 w-4 opacity-50">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" className="" />
                            </svg>
                        </div>
                    </div>
                    {isLoading ? <LoadingContent /> : <div className="flex-none">
                        <div onClick={() => getCurrentLocation()} className={`relative flex h-9 w-28 flex-nowrap  items-center  rounded  border pl-7 text-sm font-semibold  cursor-pointer border-gray-300 text-gray-800 hover:bg-gray-50 ${nearLocation ? 'border-pink-600 text-pink-600' : ''}`} >
                            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" tabIndex={-1} title="MyLocation" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="MyLocation" className=" absolute left-2 top-1 mt-1 h-4 w-4">
                                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" className="" />
                            </svg>
                            Gần bạn
                        </div>
                    </div>}

                </div>


            </div>
            {isModalOpen && <City data={areas} onClose={closeModal} city={city} setCity={setCity} />}
        </>


    )
}

export default Location