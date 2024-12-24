import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeDisplay = ({ qrData, iconSrc, handleClose }) => {
    const qrRef = useRef(null); // Ref for QR Code

    // Function to download the QR code as an image
    const downloadQRCode = () => {
        const canvas = qrRef.current.querySelector('canvas'); // Get the canvas element
        const image = canvas.toDataURL('image/png'); // Convert canvas to data URL
        const link = document.createElement('a'); // Create a download link
        link.href = image;
        link.download = 'qrcode.png'; // Set file name
        link.click(); // Trigger download
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-[#CB0B6F] rounded-lg shadow-lg w-96">
                <div
                    className="flex flex-col items-center justify-center"
                    style={{ textAlign: 'center', margin: '20px' }}
                >
                    <button
                        onClick={handleClose}
                        className="absolute -top-5 right-3 z-20 flex cursor-pointer md:-right-5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-10 w-10 text-white opacity-80 hover:opacity-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                    <h3 className="text-white mb-2">Mã QR</h3>
                    <div className="relative" ref={qrRef}>
                        {/* QR Code */}
                        <QRCodeCanvas
                            value={qrData}
                            size={256}
                            bgColor="#ffffff"
                            fgColor="#000000"
                            level="H"
                            includeMargin={true}
                        />
                        {/* Icon in the center */}
                        {iconSrc && (
                            <img
                                src={iconSrc}
                                alt="Center Icon"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                            />
                        )}
                    </div>
                    <p className="text-white mt-2">Đưa mã này cho nhân viên kiểm vé!</p>
                    {/* Download Button */}
                    <button
                        onClick={downloadQRCode}
                        className="mt-4 bg-white text-pink-500 px-4 py-2 rounded-lg shadow hover:bg-gray-200"
                    >
                        Tải mã QR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QRCodeDisplay;
