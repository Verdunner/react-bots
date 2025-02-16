import React from 'react';
import '@/styles/components/bots.scss';

type BotsListProps = {
    botSlots: string[];
    renderBot: (botName: string) => React.ReactNode;
};

const BotsList: React.FC<BotsListProps> = ({ botSlots, renderBot }) => {
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
