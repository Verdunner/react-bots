import React from 'react';

const OptionsIcon: React.FC<{ className: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit={10}
        >
            <path d="M4.949 6.996h22.192" />
            <path d="M4.949 15.996h22.192" />
            <path d="M4.949 24.996h22.192" />
        </svg>
    );
};

export default OptionsIcon;
