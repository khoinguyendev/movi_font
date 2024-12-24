import React from 'react';



const Avatar = ({
    name,
    size = "w-6 h-6",
    backgroundColor = "bg-blue-500",
    textColor = "text-white",
}) => {
    const getInitial = (name) => {
        return name.trim().charAt(0).toUpperCase();
    };

    return (
        <div
            className={`flex items-center justify-center ${size} ${backgroundColor} ${textColor} rounded-full font-bold`}
        >
            {getInitial(name)}

        </div>
    );
};

export default Avatar;
