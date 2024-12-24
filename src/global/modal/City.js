import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/searchSlice';



const City = ({ data, onClose, city, setCity }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Khóa cuộn trang khi modal mở
        document.body.style.overflow = "hidden";
        return () => {
            // Khôi phục cuộn khi modal đóng
            document.body.style.overflow = "";
        };
    }, []);
    const handleSetcity = (item) => {
        setCity(item.name);
        dispatch(setSearch({ location: item.id }));
        onClose();
    }
    return (
        <div
            className="modal  fixed inset-0 flex  flex-row justify-center bg-black bg-opacity-50 p-0 text-gray-800 sm:mt-0 md:items-center items-end modal-to-offcanvas md:p-4 film-12720"
        >

            <div className="modalFadeUp modal-cluster max-h-modal relative flex max-h-full w-full max-w-full flex-col rounded-t-xl shadow-xl md:rounded-xl h-full md:max-w-3xl bg-white" data-reach-dialog-content>
                <button type="button" aria-hidden="true" className=" pointer-events-none" />
                <button onClick={onClose} type="button" className=" absolute top-0 z-20 mt-1 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-gray-50 hover:bg-opacity-20 hover:opacity-70 left-0 right-auto md:left-auto md:right-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
                <header className="modal-header  flex items-center justify-center pt-4  pb-4 pl-12 pr-12 font-semibold">
                    <h3 className="overflow-hidden text-ellipsis whitespace-nowrap"> &nbsp; </h3>
                </header>
                <div className="modal-body  h-full overflow-auto rounded bg-white p-0">
                    <div className=" px-4 md:px-10"><div className=" mb-6 flex items-center justify-between">
                        <div className=" mr-5 whitespace-nowrap text-xl font-bold text-gray-700">Chọn địa điểm</div>
                        <div className=" relative ">
                            <input type="text" placeholder="Tìm địa điểm ..." className=" block h-9 w-full items-center justify-center rounded border border-gray-300 bg-white px-3 py-1" />
                            <button type="submit" aria-label="Search" className=" absolute right-2 top-2 border-none opacity-50 outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=" h-5 w-5 "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" className="" /></svg></button>
                        </div>
                    </div>
                        <div className=" my-3 grid grid-cols-2 gap-1 md:my-5 md:grid-cols-4 md:gap-3 ">
                            {data.map((item) => {
                                return (
                                    <div onClick={() => handleSetcity(item)} key={item.id} name={item.id} className={`text-md  cursor-pointer whitespace-nowrap rounded-md border px-3 py-2 ${item.name == city ? "border-pink-700 font-semibold text-pink-700" : "border-transparent text-gray-700 hover:bg-gray-100"}  `} >{item.name}</div>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <footer onClick={onClose} className="modal-footer flex items-center justify-end border-t border-gray-200 py-2 px-5 md:py-4"><button type="button" className=" btn inline-block rounded-md bg-pink-700 px-4 py-2 text-center text-sm font-bold text-white text-opacity-90 transition-all hover:bg-pink-800">Đóng</button>
                </footer>
            </div>

        </div>
    );
}

export default City