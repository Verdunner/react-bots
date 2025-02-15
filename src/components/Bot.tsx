import React from 'react';

interface BotProps {
    name: string;
    isCurrent?: boolean;
    title?: string;
    profit?: string | number;
    onClick?: () => void;
}

const Bot: React.FC<BotProps> = ({
    name,
    isCurrent,
    title,
    profit,
    onClick,
}) => {
    return (
        <div
            className={`bot ${isCurrent ? 'bot--current' : ''} ${
                name === 'empty_slot' ? 'bot--empty' : ''
            }`}
            onClick={onClick}
        >
            <div className="bot__image-wrapper">
                <img
                    className={`bot__image-pic ${
                        name === 'yellow_bot' ? 'bot__image-pic--big' : ''
                    }`}
                    src={
                        name === 'empty_slot'
                            ? 'img/bots/gray_bot.png'
                            : `img/bots/${name}.png`
                    }
                    alt={name}
                />
            </div>
            <span className="bot__title">
                {name === 'empty_slot' ? (
                    <>
                        Place bot
                        <br />
                        here
                    </>
                ) : (
                    title
                )}
            </span>
            <span
                className={`bot__profit ${
                    typeof profit !== 'number' || profit < 0
                        ? 'bot__profit--alert'
                        : ''
                }`}
            >
                {typeof profit === 'number' ? `${profit}%` : profit}
            </span>
        </div>
    );
};

export default Bot;
