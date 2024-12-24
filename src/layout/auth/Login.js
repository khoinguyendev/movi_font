import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/userSlice';

import ResetPassword from './ResetPassword';
import OtpModal from './Otp';
import { port } from '../../port/config';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);
    const [email, setEmail] = useState('');
    const [fogotPassword, setFogotPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [emailForgot, setEmailForgot] = useState('');
    const [emailForgotError, setEmailForgotError] = useState(false);
    const [isShowResetPassword, setIsShowResetPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        let errors = 0;

        if (!email) {
            setEmailError('Nhập Email');
            errors++;
        }
        if (!password) {
            setPasswordError('Nhập Password');
            errors++;
        }
        if (errors !== 0) {
            return;
        }

        setEmailError('');
        setPasswordError('');
        try {
            setLoading(true);
            const response = await axios.post(`${port.ip}/auth/login`, {
                email,
                password,
            });
            console.log(response.data.data.user)
            dispatch(setUser(response.data.data.user));
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.access_token}`;

            localStorage.setItem('authToken', response.data.data.access_token); // Save token
            toast.success('Đăng nhập thành công');
            navigate('/');
        } catch (error) {
            if (error.response?.data.statusCode === 400) {
                setEmailError(error.response.data.message);
            } else if (error.response?.data.statusCode === 401) {
                setUserId(error.response.data.userId);
                setShowOtpModal(true);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleCheckMail = async () => {
        if (emailForgot === '') return;

        setEmailForgotError(false);
        try {
            setLoading(true);
            await axios.post(`${port.ip}/auth/checkmail`, {
                email: emailForgot,
            });
            setIsShowResetPassword(true);
        } catch (error) {
            if (error.response?.data.statusCode === 400) {
                setEmailForgotError(true);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" bg-gray-100">
            <div className="container mx-auto py-8">

                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            {!fogotPassword ? (
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Đăng nhập tài khoản</h2>
                                    <form onSubmit={handleLogin}>
                                        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}

                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                Mật khẩu <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full btn-primary btn-primary-landing py-2  text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            disabled={loading}
                                        >
                                            {loading ? 'Đang xử lý...' : 'Đăng nhập'}
                                        </button>
                                    </form>
                                    <p className="text-sm text-gray-500 mt-4">
                                        Bạn quên mật khẩu?{' '}
                                        <button
                                            type="button"
                                            className="text-blue-500 hover:underline"
                                            onClick={() => setFogotPassword(true)}
                                        >
                                            Nhấp vào đây
                                        </button>
                                    </p>
                                </div>
                            ) : !isShowResetPassword ? (
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Quên mật khẩu</h2>
                                    <p className="text-gray-500 mb-4">
                                        Chúng tôi sẽ gửi một email để bạn đặt lại mật khẩu.
                                    </p>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                                            value={emailForgot}
                                            onChange={(e) => setEmailForgot(e.target.value)}
                                            placeholder="Nhập email"
                                            required
                                        />
                                        {emailForgotError && (
                                            <p className="text-red-500 text-sm mt-1">
                                                Không tìm thấy tài khoản tương ứng với email này.
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={handleCheckMail}
                                        className="w-full py-2 btn-primary btn-primary-landing text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Gửi yêu cầu
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full mt-2 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                        onClick={() => setFogotPassword(false)}
                                    >
                                        Hủy
                                    </button>
                                </div>
                            ) : (
                                <ResetPassword
                                    setIsShowResetPassword={setIsShowResetPassword}
                                    email={emailForgot}
                                    setFogotPassword={setFogotPassword}
                                />
                            )}
                        </div>
                        <OtpModal
                            show={showOtpModal}
                            handleClose={() => setShowOtpModal(false)}
                            email={email}
                            id={userId}
                            getCode={true}
                            message="Tài khoản chưa được kích hoạt. Nhập mã để kích hoạt tài khoản."
                        />
                        <div className="flex-1 bg-blue-50 p-4 rounded-md">
                            <h4 className="text-lg font-semibold mb-4">Quyền lợi với thành viên</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li>Tích điểm đổi quà</li>
                                <li>Tích điểm đổi quà</li>
                                <li>Tích điểm đổi quà</li>
                                <li>Tích điểm đổi quà</li>
                                <li>Tích điểm đổi quà</li>
                            </ul>
                            <Link
                                to="/register"
                                className="block mt-4 py-2 text-center text-white btn-primary btn-primary-landing"
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
