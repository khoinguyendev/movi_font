import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../layout/home'
import MovieDetail from '../layout/movidetatail'
import Login from '../layout/auth/Login'
import Register from '../layout/auth/Register'
import Profile from '../layout/auth/Me'
import NotFound from '../pages/NotFound'
import PrivateRoute from './PrivateRouter'
import Me from '../layout/auth/Me'
import ChangeVoucher from '../layout/changvoucher/ChangeVoucher'
import PaymentResult from '../layout/Payment/PaymentResult'
import PaymentResultZalo from '../layout/Payment/PaymentResultZalo'

const MainContent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home title={"Trang chủ"} />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/test-qr" element={<MovieDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/me/*"
                element={
                    <PrivateRoute>
                        <Me />
                    </PrivateRoute>
                } />
            <Route path="/change-voucher"
                element={
                    <PrivateRoute>
                        <ChangeVoucher />
                    </PrivateRoute>
                } />
            <Route path="/payment/result"
                element={
                    <PrivateRoute>
                        <PaymentResult />
                    </PrivateRoute>
                } />
            <Route path="/payment/zalo/result"
                element={
                    <PrivateRoute>
                        <PaymentResultZalo />
                    </PrivateRoute>
                } />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}

export default MainContent