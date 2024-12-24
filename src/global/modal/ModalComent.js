import React, { useState } from "react";
import toast from "react-hot-toast";
import { port } from "../../port/config";
import axios from "axios";
import { useParams } from "react-router-dom";

const ratingDescriptions = {
    1: "Tệ",
    2: "Kén người mê",
    3: "Trung bình",
    4: "Chưa ưng lắm",
    5: "Tạm ổn",
    6: "Tạm ổn",
    7: "Đáng xem",
    8: "Trung bình",
    9: "Cực phẩm",
    10: "Cực phẩm",
};

const ModalComent = ({ show, handleClose }) => {
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(null);
    const [images, setImages] = useState([]);
    const [comment, setComment] = useState("");
    const { id } = useParams(); // Retrieve the 'id' parameter from the URL

    // Handle image selection
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 3) {
            toast.error("Tối đa 3 ảnh.");
            return;
        }

        const validImages = files.filter((file) =>
            file.type.startsWith("image/")
        );

        if (validImages.length !== files.length) {
            toast.error("Chỉ chọn file ảnh hợp lệ.");
            return;
        }

        setImages(validImages);
    };

    // Handle word count in textarea
    const handleCommentChange = (e) => {
        const words = e.target.value.split(/\s+/);
        if (words.length > 100) {
            toast.error("Tối đa 100 từ.");
            return;
        }
        setComment(e.target.value);
    };

    // Handle rating button click
    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleSubmit = async () => {
        if (!rating) {
            toast.error("Vui lòng đánh giá.");
            return;
        }

        // if (images.length === 0) {
        //     toast.error("Vui lòng chọn ảnh.");
        //     return;
        // }

        setLoading(true);

        const formData = new FormData();
        if (images.length > 0) {
            images.forEach((file) => {
                formData.append("images", file); // Match the backend field name
            });
        }



        try {
            if (images.length > 0) {
                const response = await axios.post(`${port.ip}/upload/comment`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                const response2 = await axios.post(`${port.ip}/review`, {
                    movieId: id,
                    content: comment,
                    rating: rating,
                    images: JSON.stringify(response.data.data.uploadedFiles),
                });
                console.log(response2.data);
            } else {
                const response2 = await axios.post(`${port.ip}/review`, {
                    movieId: id,
                    content: comment,
                    rating: rating,
                });
                console.log(response2.data);
            }


            toast.success("Bình luận thành công");

            handleClose(); // Close the modal after successful submission
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Lỗi khi gửi bình luận.";
            toast.error(errorMessage);
            console.error("Error:", errorMessage);
        } finally {
            setLoading(false);
        }
    };
    const hanldeDong = () => {
        setImages([]);
        setComment("");
        setRating(null);
        handleClose();
    }
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-[50rem] p-6">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold text-center">Bình luận</h2>

                    {/* Rating Buttons */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-2">
                            Đánh giá (1-10)
                        </label>
                        <div className="flex justify-center space-x-2">
                            {Array.from({ length: 10 }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handleRatingClick(index + 1)}
                                    className={`px-3 py-2 rounded ${rating === index + 1
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        {rating && (
                            <p className="text-center font-bold mt-2 text-sm text-pink-500">
                                {ratingDescriptions[rating]}
                            </p>
                        )}
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label htmlFor="images" className="block font-medium text-gray-700">
                            Thêm ảnh (tối đa 3)
                        </label>
                        <input
                            type="file"
                            id="images"
                            accept="image/*"
                            multiple
                            hidden
                            onChange={handleImageChange}
                        />
                        <label
                            htmlFor="images"
                            className="cursor-pointer text-blue-500 underline"
                        >
                            Chọn ảnh
                        </label>
                        <div className="flex space-x-2 mt-2">
                            {images.map((file, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(file)}
                                    alt={`Selected ${index + 1}`}
                                    className="w-20 h-20 object-cover rounded"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Textarea */}
                    <div>
                        <label htmlFor="comment" className="block font-medium text-gray-700">
                            Bình luận (tối đa 100 từ)
                        </label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={handleCommentChange}
                            rows="4"
                            className="w-full border rounded p-2 mt-1"
                            placeholder="Viết bình luận tại đây..."
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={hanldeDong}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Đóng
                        </button>
                        <button
                            disabled={loading}
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {loading ? "Đang xử lí" : "Gửi"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalComent;
