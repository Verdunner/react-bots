import React from 'react';

const ChartIcon: React.FC<{ className: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <style>{`.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;}`}</style>
            </defs>
            <title />
            <line className="a" x1="0.5" x2="23.5" y1="23.5" y2="23.5" />
            <path
                className="a"
                d="M4.5,19a.5.5,0,0,0-.5-.5H2a.5.5,0,0,0-.5.5v4.5h3Z"
            />
            <path
                className="a"
                d="M10.5,14a.5.5,0,0,0-.5-.5H8a.5.5,0,0,0-.5.5v9.5h3Z"
            />
            <path
                className="a"
                d="M16.5,16a.5.5,0,0,0-.5-.5H14a.5.5,0,0,0-.5.5v7.5h3Z"
            />
            <path
                className="a"
                d="M22.5,9a.5.5,0,0,0-.5-.5H20a.5.5,0,0,0-.5.5V23.5h3Z"
            />
            <circle className="a" cx="3" cy="11.5" r="1.5" />
            <circle className="a" cx="9" cy="6.5" r="1.5" />
            <circle className="a" cx="15" cy="8.5" r="1.5" />
            <circle className="a" cx="21" cy="2" r="1.5" />
            <line className="a" x1="4.261" x2="7.848" y1="10.45" y2="7.46" />
            <line className="a" x1="10.424" x2="13.577" y1="6.974" y2="8.025" />
            <line className="a" x1="19.8" x2="16.041" y1="2.9" y2="7.285" />
        </svg>
    );
};

export default ChartIcon;
