import React, { useMemo } from 'react';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import {
    RefreshIcon,
    OptionsIcon,
    BulletsIcon,
    ChartIcon,
    CartIcon,
    DollarIcon,
    SettingsIcon,
} from '@/components/icons';
import {
    AreaChart,
    Area,
    XAxis,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts';

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
            <div className="header">
                <button className="header__btn btn btn--iconed btn--iconed-enlarged">
                    <OptionsIcon className="btn__pic" />
                </button>
                <h1 className="header__page-title title">Dashboard</h1>
                <button className="header__btn btn btn--iconed">
                    <RefreshIcon className="btn__pic" />
                </button>
            </div>
            <div className="main">
                <div className="capital">
                    <div className="capital__left">
                        <div className="capital__title capital__title--primary title">
                            Trading capital
                        </div>
                        <div className="capital__sum capital__sum--primary">
                            {trading_capital} {trading_capital_currency}
                        </div>
                    </div>
                    <div className="capital__right">
                        <div className="capital__title capital__title--primary title">
                            &nbsp;
                        </div>
                        <div className="capital__balance">
                            <div className="capital__title capital__title--balance title">
                                Balance:
                            </div>
                            <div className="capital__sum capital__sum--balance">
                                {formatBalance(balance)}
                                <img
                                    className="capital__coin"
                                    src="img/icons/coin.png"
                                    alt="coins"
                                ></img>
                            </div>
                        </div>
                        <div className="capital__on-hold">
                            <div className="capital__title capital__title--on-hold title">
                                On hold:
                            </div>
                            <div className="capital__sum capital__sum--on-hold">
                                {formatBalance(on_hold)}
                                <img
                                    className="capital__coin"
                                    src="img/icons/coin.png"
                                    alt="coins"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={fullData}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="colorValue"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#0ea5e9"
                                        stopOpacity={0.5}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#0ea5e9"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>
                            {Array.from({ length: 9 }).map((_, index) => (
                                <ReferenceLine
                                    key={index}
                                    y={
                                        (index / 8) *
                                        Math.max(
                                            ...fullData.map((d) => d.value)
                                        )
                                    }
                                    stroke="rgba(77, 96, 120, 0.1)"
                                />
                            ))}
                            {getVerticalLines(fullData)}
                            <XAxis
                                dataKey="date"
                                stroke="#4b5563"
                                tickFormatter={(value, index) =>
                                    value === '21.04' ||
                                    value === '27.04' ||
                                    (index - 3) % 6 !== 0
                                        ? ''
                                        : value
                                }
                                tickLine={false}
                                axisLine={false}
                                tick={{ fontSize: 10 }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#0069bc"
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="bots">
                    <ul className="bots__items">
                        {botSlots.map((botName) => (
                            <li key={botName} className="bots__item">
                                {botName === 'empty_slot' ? (
                                    <Bot name="empty_slot" />
                                ) : (
                                    <Bot
                                        name={botName}
                                        isCurrent={botName === currentBot}
                                        title={botTitles[botName]}
                                        profit={getBotProfit(
                                            botName,
                                            currentTimeRange
                                        )}
                                        onClick={() => setCurrentBot(botName)}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="controls">
                    <span className="controls__title">Time Range:</span>
                    {timeRanges.map((range) => (
                        <button
                            key={range}
                            className={`controls__btn btn btn--regular ${
                                currentTimeRange === range
                                    ? 'btn--regular-selected'
                                    : ''
                            }`}
                            onClick={() => setCurrentTimeRange(range)}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>
            <div className="footer">
                <ul className="footer__items">
                    <li className="footer__item">
                        <button className="footer__btn btn btn--nav btn--nav-selected">
                            <BulletsIcon className="btn__pic" />
                            <span className="btn__label">Dashboard</span>
                        </button>
                    </li>
                    <li className="footer__item">
                        <button className="footer__btn btn btn--nav">
                            <ChartIcon className="btn__pic" />
                            <span className="btn__label">Megabot</span>
                        </button>
                    </li>
                    <li className="footer__item">
                        <button className="footer__btn btn btn--nav">
                            <CartIcon className="btn__pic" />
                            <span className="btn__label">Bot market</span>
                        </button>
                    </li>
                    <li className="footer__item">
                        <button className="footer__btn btn btn--nav">
                            <DollarIcon className="btn__pic" />
                            <span className="btn__label">Coin Prices</span>
                        </button>
                    </li>
                    <li className="footer__item">
                        <button className="footer__btn btn btn--nav">
                            <SettingsIcon className="btn__pic" />
                            <span className="btn__label">Profile</span>
                            <div className="btn__mark">3</div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default App;
