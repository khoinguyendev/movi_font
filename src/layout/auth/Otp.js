import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { port } from "../../port/config";

const OtpModal = ({ show, handleClose, message, email, getCode, id }) => {
    const navigate = useNavigate();
    const initialSeconds = 30; // Thời gian đếm ngược ban đầu
    const [seconds, setSeconds] = useState(initialSeconds);
    const [clickCode, setClickCode] = useState(false);
    const [errorOtp, setErrorOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");

    const hanldeGetCode = async () => {
        if (!clickCode) {
            try {
                setLoading(true);
                const response = await axios.post(`${port.ip}/auth/getcode`, {
                    email,
                });
                console.log("check", response.data);
                setClickCode(true);
                setSeconds(initialSeconds); // Đặt lại thời gian đếm ngược
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleSubmit = async () => {
        if (otp === "") {
            setErrorOtp("Vui lòng nhập mã");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post(`${port.ip}/auth/verify`, {
                id: id,
                code: otp,
            });
            console.log("check", response.data);
            toast.success("Kích hoạt tài khoản thành công");
            handleClose();
            navigate("/login");
        } catch (error) {
            if (error.response?.data.message === "Thời gian mã code đã hết hạn") {
                setErrorOtp("Thời gian mã code đã hết hạn");
            } else if (error.response?.data.message === "Mã code không hợp lệ") {
                setErrorOtp("Mã code không hợp lệ");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let timer;
        if (clickCode && seconds > 0) {
            // Giảm giây mỗi 1 giây
            timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
        } else if (seconds === 0) {
            setClickCode(false); // Cho phép click lại sau khi countdown kết thúc
        }
        return () => clearTimeout(timer); // Dọn dẹp timeout
    }, [clickCode, seconds]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-96">
                <div className="p-5">
                    <p className="text-green-600">{message}</p>
                    {getCode && (
                        <p className="mt-4">
                            <span
                                onClick={hanldeGetCode}
                                className={`underline cursor-pointer ${clickCode ? "text-gray-400 cursor-not-allowed" : "text-blue-600"
                                    }`}
                            >
                                Lấy mã
                            </span>
                            {clickCode && (
                                <span className="text-blue-600 ml-2">({seconds}s)</span>
                            )}
                        </p>
                    )}
                    {errorOtp && <span className="text-red-500">{errorOtp}</span>}
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Nhập mã kích hoạt"
                        className="mt-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div className="flex justify-end p-4 border-t">
                    <button
                        onClick={handleClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Đóng
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`ml-2 px-4 py-2 rounded ${loading
                            ? "bg-blue-300 text-white cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                    >
                        {loading ? (
                            <span className="loader w-4 h-4 border-2 border-t-white border-blue-600 rounded-full animate-spin"></span>
                        ) : (
                            "Kích hoạt"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtpModal;
