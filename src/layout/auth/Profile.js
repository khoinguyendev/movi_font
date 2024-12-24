import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Avatar from '../../global/components/Avatar';
import AvatarModal from '../../global/modal/AvatarModal';
import { port } from '../../port/config';
const Profile = () => {
    const user = useSelector((state) => state.user.items);
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                    className="object-cover object-top w-full"
                    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="Mountain"
                    loading='lazy'
                />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                {!user.avatar ? (
                    <Avatar size="w-32 h-32" name={user.username} />
                ) : (
                    <img
                        src={`${port.ip}/uploads/avatar/${user.avatar}`}
                        alt="avatar"
                    />
                )}
            </div>
            <div className='flex justify-center items-center'>
                <svg onClick={() => setShowModal(true)} data-slot="icon" className="w-5 h-5 text-blue-700 cursor-pointer" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                    </path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                    </path>
                </svg>

            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">@{user?.username}</h2>
                <p className="flex justify-center items-center">
                    <svg
                        className="w-6 text-blue-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                        />
                    </svg>
                    <div className="ms-2 text-gray-700 text-sm"> {user.email}</div>
                </p>
                {user.phone && (
                    <p className="flex justify-center items-center">
                        <svg
                            className="w-6 text-blue-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                        </svg>

                        <div className="ms-2 text-gray-700 text-sm"> {user.phone}</div>
                    </p>
                )}
            </div>
            <div className="p-4 border-t mx-8 mt-2">
                <button className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                    Cập nhật thông tin
                </button>
            </div>
            <AvatarModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                username={user.username}
                avatar={user.avatar}
            />
        </>
    )
}

export default Profile