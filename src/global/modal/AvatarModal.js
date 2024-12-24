import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import axios from 'axios';
import { port } from '../../port/config';
import { useDispatch } from 'react-redux';
import { setFieldUser } from '../../redux/userSlice';
import toast from 'react-hot-toast';

const AvatarModal = ({ show, handleClose, avatar, username, onUpdate }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const [selectedImage, setSelectedImage] = useState(null); // Lưu trữ ảnh được chọn
    const [selectedFile, setSelectedFile] = useState(null); // Lưu trữ file để upload


    // Xử lý sự kiện khi người dùng chọn ảnh
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Tạo URL tạm thời cho ảnh
            setSelectedImage(imageUrl);
            setSelectedFile(file); // Lưu file để gửi
        }
    };

    // Hàm gửi dữ liệu (update avatar)
    const handleUpdate = async () => {
        if (!selectedFile) return;

        setLoading(true); // Hiển thị trạng thái loading
        const formData = new FormData();
        formData.append('image', selectedFile); // Tên 'image' phải trùng với tên bạn sử dụng trong `@FileInterceptor`

        try {
            // Gửi request với formData
            const response = await axios.post(`${port.ip}/upload/avatar`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });


            dispatch(setFieldUser({ avatar: response.data.data.avatarUrl }));
            toast.success("Cập nhật thành công");
            handleClose(); // Đóng modal
        } catch (error) {
            toast.error("Lỗi");
            console.error('Error uploading avatar:', error.response?.data || error.message);
        } finally {
            setLoading(false); // Kết thúc trạng thái loading
        }
    };

    const handleDong = () => {
        setSelectedImage(null);
        setSelectedFile(null);
        handleClose();
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <div className="flex flex-col">
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white rounded-lg text-gray-900">
                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                            {
                                // Hiển thị ảnh đã chọn, ảnh mặc định, hoặc ảnh avatar
                                selectedImage ? (
                                    <img className="object-cover object-center h-32 w-32" src={selectedImage} alt="Selected" />
                                ) : !avatar ? (
                                    <Avatar size="w-32 h-32" name={username} />
                                ) : (
                                    <img src={`${port.ip}/uploads/avatar/${avatar}`} alt="avatar" />
                                )
                            }
                        </div>

                        {/* Input chọn ảnh */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange} // Gọi hàm xử lý khi chọn tệp
                            className="mt-4 text-sm text-gray-600"
                        />

                        <div className="text-right">
                            {selectedImage && (
                                <button
                                    onClick={handleUpdate} // Gửi dữ liệu khi nhấn
                                    className="mt-4 me-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                    disabled={loading} // Vô hiệu hóa nút khi loading
                                >
                                    {loading ? 'Đang cập nhật...' : 'Cập nhật'}
                                </button>
                            )}
                            <button
                                onClick={handleDong}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvatarModal;
