import React from 'react';
import { getBotProfit } from '@/utils/getBotProfit';
import { botTitles } from '@/constants/constants';

interface IBotProps {
    name: string;
    isCurrent?: boolean;
    currentTimeRange?: string;
    onClick?: () => void;
}

const Bot: React.FC<IBotProps> = ({
    name,
    isCurrent,
    currentTimeRange = 'no data',
    onClick,
}) => {
    const profit = getBotProfit(name, currentTimeRange);
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
                    botTitles[name]
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
