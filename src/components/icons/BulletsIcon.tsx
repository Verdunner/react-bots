import React from 'react';

const BulletsIcon: React.FC<{ className: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.26,6.11A3.27,3.27,0,1,0,8.53,9.37,3.26,3.26,0,0,0,5.26,6.11Zm0,4.53A1.27,1.27,0,1,1,6.53,9.37,1.27,1.27,0,0,1,5.26,10.64Z"
                fill="currentColor"
            />
            <path
                d="M5.26,16.74A3.26,3.26,0,1,0,8.53,20,3.26,3.26,0,0,0,5.26,16.74Zm0,4.53A1.27,1.27,0,1,1,6.53,20,1.27,1.27,0,0,1,5.26,21.27Z"
                fill="currentColor"
            />
            <path
                d="M14.33,10.09H37a1,1,0,0,0,0-2H14.33a1,1,0,0,0,0,2Z"
                fill="currentColor"
            />
            <path
                d="M37,18.86H14.33a1,1,0,0,0,0,2H37a1,1,0,1,0,0-2Z"
                fill="currentColor"
            />
            <path
                d="M5.26,27.36a3.27,3.27,0,1,0,3.27,3.27A3.27,3.27,0,0,0,5.26,27.36Zm0,4.54a1.27,1.27,0,1,1,1.27-1.27A1.27,1.27,0,0,1,5.26,31.9Z"
                fill="currentColor"
            />
            <path
                d="M37,29.63H14.33a1,1,0,0,0,0,2H37a1,1,0,1,0,0-2Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default BulletsIcon;
