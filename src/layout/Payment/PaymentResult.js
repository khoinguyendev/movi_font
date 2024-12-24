import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingContent from '../../global/components/LoadingContent';
import { port } from '../../port/config';
import axios from 'axios';
import { QRCodeCanvas } from 'qrcode.react';

const PaymentResult = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');
    const location = useLocation();
    const [queryData, setQueryData] = useState({});

    useEffect(() => {
        // Extract query parameters
        const searchParams = new URLSearchParams(location.search);
        const params = Object.fromEntries(searchParams.entries());
        if (params.resultCode == '0') {
            const fetData = async () => {
                try {
                    setLoading(true);


                    const response = await axios.post(`${port.ip}/payment-momo/result-success`, {
                        orderId: params.orderId,
                        amount: Number(params.amount),
                    });


                    setData(response.data.data);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }

            }
            fetData();
        } else {
            console.log('b');
            console.log('Thanh toán thất bại');
            setLoading(false);
        }

        setQueryData(params);
    }, [location.search]);
    if (loading) return <LoadingContent />
    console.log(data);
    return (
        <div className="bg-gray-100 ">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h3 className='text-center font-bold'>Chúc mừng bạn</h3>
                            <p className='text-center'>Việc mua vé online đã thành công. Galaxy Cinema xin chân thành cảm ơn bạn đã chọn chúng tôi để phục vụ nhu cầu giải trí của bạn</p>
                            <h3 className="text-black text-center font-bold mb-2">Mã QR</h3>
                            <div className="flex justify-center" >
                                {/* QR Code */}
                                <QRCodeCanvas
                                    value={data.id}
                                    size={256}
                                    bgColor="#ffffff"
                                    fgColor="#000000"
                                    level="H"
                                    includeMargin={true}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentResult;
