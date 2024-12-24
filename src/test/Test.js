import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [qrValue, setQrValue] = useState('');

    const handleGenerateQR = () => {
        if (name && age) {
            const userInfo = `Name: ${name}\nAge: ${age}`;
            setQrValue(userInfo);
        } else {
            alert('Please fill in both name and age!');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>QR Code Generator</h2>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: '8px', width: '200px', marginRight: '10px' }}
                />
                <input
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{ padding: '8px', width: '100px' }}
                />
            </div>
            <button
                onClick={handleGenerateQR}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                }}
            >
                Generate QR Code
            </button>

            <div style={{ marginTop: '20px' }}>
                {qrValue && (
                    <>
                        <h3>Your QR Code:</h3>
                        <QRCodeCanvas value={qrValue} size={200} />
                    </>
                )}
            </div>
        </div>
    );
};

export default QRCodeGenerator;
