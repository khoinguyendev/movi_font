import React from 'react'

const Tickets = () => {
    return (
        <div className="flex bg-[#f0feff] justify-center items-center h-screen">
            <div className="max-w-[490px] rounded-lg w-[100%] overflow-hidden bg-white shadow-[0_0_1rem_rgba(0,0,0,0.2)] ">
                <div className="card">
                    <div className="grid grid-cols-5">
                        <div className="col-span-2 p-3">
                            <img src="https://svgshare.com/i/16D0.svg" alt="demo" />
                        </div>
                        <div className="col-span-3 p-3">
                            <div className="font-bold">Darlene Robertson</div>
                            <div className="mb-3">Senior Journalist</div>
                            <div className="card flex justify-between items-center text-gray-500 bg-gray-200 focus:bg-white rounded-lg p-2">
                                <div className="text-center">
                                    <p className="text-sm">Articles</p>
                                    <p className="font-bold text-gray-800">37</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm">Followers</p>
                                    <p className="font-bold text-gray-800">850</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm">Rating</p>
                                    <p className="font-bold text-gray-800 flex gap-1">
                                        <img src="https://svgshare.com/i/16Fg.svg" />
                                        9.5
                                    </p>
                                </div>
                            </div>
                            <div className="flex mt-3 gap-2">
                                <button className="bg-white text-gray-500 py-2 px-4 rounded-lg border-2 hover:bg-gray-400 flex-1">
                                    Chat
                                </button>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex-1">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tickets