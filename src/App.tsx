import React, { useMemo } from 'react';
import {
    Bot,
    BotsList,
    Capital,
    Chart,
    Controls,
    Header,
    NavBar,
} from '@/components';
import generateRandomData from '@/utils/generateRandomData';
import useLocalStorageState from '@/hooks/useLocalStorageState';

const App: React.FC = () => {
    const [currentTimeRange, setCurrentTimeRange] = useLocalStorageState(
        'currentTimeRange',
        'All time'
    );
    const [currentBot, setCurrentBot] = useLocalStorageState<string | null>(
        'currentBot',
        'yellow_bot'
    );

    const fullData = useMemo(generateRandomData, [
        currentBot,
        currentTimeRange,
    ]);

    return (
        <div className="app">
            <Header />
            <div className="main">
                <Capital />
                <Chart fullData={fullData} />
                <BotsList
                    renderBot={(botName) =>
                        botName === 'empty_slot' ? (
                            <Bot name="empty_slot" />
                        ) : (
                            <Bot
                                name={botName}
                                isCurrent={botName === currentBot}
                                currentTimeRange={currentTimeRange}
                                onClick={() => setCurrentBot(botName)}
                            />
                        )
                    }
                />
                <Controls
                    currentTimeRange={currentTimeRange}
                    setCurrentTimeRange={setCurrentTimeRange}
                />
            </div>
            <NavBar />
        </div>
    );
};

export default App;
