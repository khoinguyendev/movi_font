import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import OtpModal from "./Otp";
import { port } from "../../port/config";

const Register = () => {
    const [user, setUser] = useState(null);
    const [emailError, setEmailError] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent form submission reload
        try {
            setLoading(true);
            setEmailError(""); // Reset error message

            const response = await axios.post(`${port.ip}/auth/register`, {
                username,
                email,
                password,
            });

            setUser(response.data.data);
            toast.success("Đăng kí thành công");
            setShowOtpModal(true); // Show OTP modal
        } catch (error) {
            // Handle specific error responses
            if (error.response?.data.message === "Email already exists") {
                setEmailError("Email đã tồn tại");
            } else {
                setEmailError("Có lỗi xảy ra, vui lòng thử lại sau.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 ">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h1 className="text-2xl font-semibold mb-6">Đăng ký tài khoản</h1>
                            <form onSubmit={handleRegister} className="space-y-4">
                                <div>
                                    <label className="block font-medium mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
                                    <input
                                        type="email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium mb-1">
                                        Username <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
                                        placeholder="Tên"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium mb-1">
                                        Mật khẩu <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
                                        placeholder="Mật khẩu"
                                        required
                                    />
                                </div>
                                <button
                                    className={`w-full py-2 px-4 text-white font-medium rounded-lg ${loading ? "bg-gray-400 cursor-not-allowed" : "btn-primary btn-primary-landing"
                                        }`}
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="loader  border-t-transparent border-4 border-white border-solid rounded-full h-6 w-6 mx-auto animate-spin"></span>
                                    ) : (
                                        "Đăng kí"
                                    )}
                                </button>
                            </form>
                            {/* OTP Modal */}
                            <OtpModal
                                show={showOtpModal}
                                handleClose={() => setShowOtpModal(false)}
                                id={user?.id}
                                loading={loading}
                                message="Đăng kí tài khoản thành công, nhập mã OTP được gửi về email để kích hoạt tài khoản"
                            />
                        </div>
                        {/* Right Column */}
                        <div className="flex-1 bg-blue-50 p-4 rounded-md">
                            <h4 className="text-xl font-semibold mb-4">Quyền lợi với thành viên</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>Vận chuyển siêu tốc</li>
                                <li>Sản phẩm đa dạng</li>
                                <li>Đổi trả dễ dàng</li>
                                <li>Tích điểm đổi quà</li>
                                <li>Giảm giá cho lần mua tiếp theo lên đến 10%</li>
                            </ul>
                            <Link
                                to="/login"
                                className="mt-4 inline-block w-full text-center   py-2 px-4 rounded-lg btn-primary btn-primary-landing"
                            >
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                    {/* Left Column */}


                </div>



                {/* Registration Form Section */}

            </div>
            {/* Breadcrumb Section */}

        </div>
    );
};

export default Register;
