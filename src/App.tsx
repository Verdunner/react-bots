import React, { useMemo } from 'react';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';

import jsonData from '@/constants/data.min.json';
const { trading_capital, trading_capital_currency, balance, on_hold } =
    jsonData;
import { timeRanges, botSlots, botTitles } from '@/constants/constants';
import generateRandomData from '@/utils/generateRandomData';
import formatBalance from '@/utils/formatBalance';
import { getBotProfit } from '@/utils/getBotProfit';
import { getVerticalLines } from '@/utils/getVerticalLines';
import useLocalStorageState from '@/hooks/useLocalStorageState';
import Bot from '@/components/Bot';
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import Controls from '@/components/Controls';
import BotsList from '@/components/BotsList';
import Chart from '@/components/Chart';
import Capital from '@/components/Capital';

const App = () => {
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
                <Capital
                    tradingCapital={trading_capital}
                    tradingCapitalCurrency={trading_capital_currency}
                    balance={balance}
                    onHold={on_hold}
                    formatBalance={formatBalance}
                />
                <Chart
                    fullData={fullData}
                    getVerticalLines={getVerticalLines}
                />
                <BotsList
                    botSlots={botSlots}
                    renderBot={(botName) =>
                        botName === 'empty_slot' ? (
                            <Bot name="empty_slot" />
                        ) : (
                            <Bot
                                name={botName}
                                isCurrent={botName === currentBot}
                                title={botTitles[botName]}
                                profit={getBotProfit(botName, currentTimeRange)}
                                onClick={() => setCurrentBot(botName)}
                            />
                        )
                    }
                />
                <Controls
                    timeRanges={timeRanges}
                    currentTimeRange={currentTimeRange}
                    setCurrentTimeRange={setCurrentTimeRange}
                />
            </div>
            <NavBar />
        </div>
    );
};

export default App;
