import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ResetPassword = ({ setIsShowResetPassword, email, setFogotPassword }) => {
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRPassword] = useState("");
    const [erOtp, setErOtp] = useState("");
    const [erPassword, setErPassword] = useState("");
    const [erRpassword, setErRPassword] = useState("");
    const handleReset = async () => {
        setErOtp("");
        setErPassword("");
        setErRPassword("");
        let er = 0;
        if (!otp) {
            er++;
            setErOtp("Nhập code");
        }
        if (!password) {
            er++;
            setErPassword("Nhập mật khẩu");
        } else {
            if (password.length < 6 || password.length > 15) {
                setErPassword("Mật khẩu dài từ 6-15 kí tự");
            } else {
                if (password != rpassword) {
                    er++;
                    setErRPassword("Xác nhận mật khẩu không khớp")
                }
            }

        }
        if (er > 0) return;
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:6969/auth/resetpassword", {
                code: otp,
                password: password,
                email: email
            });
            setFogotPassword(false);
            setIsShowResetPassword(false);
            toast.success("Cập nhật thành công")
        } catch (error) {
            // Specific error message handling
            if (error.response?.data.message == "Thời gian mã code đã hết hạn") {
                setErOtp(error.response?.data.message);
            } else if (error.response?.data.message == "Mã code không hợp lệ") {
                setErOtp(error.response?.data.message);
            }
            else (console.log(error))
        } finally {
            setLoading(false);
        }

    }
    return (
        <div className="group-login group-recover">
            <h2>
                Đặt lại mật khẩu
            </h2>

            <form id="recover_customer_password" acceptCharset="UTF-8"><input name="FormType" type="hidden" defaultValue="recover_customer_password" /><input name="utf8" type="hidden" defaultValue="true" />

                <fieldset className="form-group">

                    <label>Mã OTP <span className="required">*</span></label>
                    {erOtp && <span className='text-danger d-block'>{erOtp}</span>}

                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="form-control form-control-lg"
                        placeholder="Mã OTP"
                        required
                    />
                </fieldset>
                <fieldset className="form-group">

                    <label>Mật khẩu mới<span className="required">*</span></label>
                    {erPassword && <span className='text-danger d-block'>{erPassword}</span>}

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control form-control-lg"
                        placeholder="Mật khẩu"
                        required
                    />
                </fieldset>
                <fieldset className="form-group">

                    <label>Xác nhận mật khẩu <span className="required">*</span></label>
                    {erRpassword && <span className='text-danger d-block'>{erRpassword}</span>}

                    <input
                        type="password"
                        value={rpassword}
                        onChange={(e) => setRPassword(e.target.value)}
                        className="form-control form-control-lg"
                        placeholder="Xác nhận mật khẩu"
                        required
                    />
                </fieldset>
                {loading ?
                    <button className="btn-login" type="button" disabled><span className="loader"></span></button>
                    :
                    <button className="btn-login" type="button" onClick={handleReset}>Gửi</button>
                }
                <a href='#' className="btn-ref" onClick={() => setIsShowResetPassword(false)} >Hủy</a>
            </form>

        </div>
    )
}

export default ResetPassword