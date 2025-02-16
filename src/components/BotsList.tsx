import React from 'react';
import { botSlots } from '@/constants/constants';

type TBotsListProps = {
    renderBot: (botName: string) => React.ReactNode;
};

const BotsList: React.FC<TBotsListProps> = ({ renderBot }) => {
    return (
        <div className="bots">
            <ul className="bots__items">
                {botSlots.map((botName) => (
                    <li key={botName} className="bots__item">
                        {renderBot(botName)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BotsList;
