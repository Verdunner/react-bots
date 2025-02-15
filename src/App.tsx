import React from 'react';
import { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import jsonData from '@/constants/data.min.json';
import Bot from '@/components/Bot';

const { trading_capital, trading_capital_currency, balance, on_hold, bots } =
    jsonData;

const App = () => {
    const timeRanges = ['24h', '7 days', '30 days', 'All time'];
    const botSlots = [
        'orange_bot',
        'empty_slot',
        'blue_bot',
        'green_bot',
        'yellow_bot',
        'red_bot',
    ];
    const [currentTimeRange, setCurrentTimeRange] = useState(
        localStorage.getItem('currentTimeRange') || 'All time'
    );
    const [currentBot, setCurrentBot] = useState<string | null>(
        localStorage.getItem('currentBot') || 'yellow_bot'
    );

    type DataPoint = {
        date: string;
        value: number;
    };

    function generateRandomData() {
        const data = [];
        const startDate = new Date(2025, 3, 22); // 22 апреля

        for (let i = 0; i < 5; i++) {
            const currentDate = new Date(
                startDate.getTime() + i * 24 * 60 * 60 * 1000
            );
            const formattedDate = `${currentDate
                .getDate()
                .toString()
                .padStart(2, '0')}.${(currentDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}`;

            for (let j = 0; j < 7; j++) {
                const value =
                    Math.floor(Math.random() * (1300 - 700 + 1)) + 700;
                data.push({ date: formattedDate, value });
            }
        }

        console.log(data);
        return data;
    }

    const getBotProfit = (name: string): number => {
        const timeRangeMap: Record<string, string> = {
            '24h': '24h',
            '7 days': '7d',
            '30 days': '30d',
            'All time': 'all_time',
        };

        const bot = bots.find((bot) => bot.name === name);
        if (!bot) return 0;

        const key = timeRangeMap[currentTimeRange];
        const value = key ? bot[key as keyof typeof bot] : null;

        return typeof value === 'number' ? value : 0;
    };

    const getBotTitle = (name: string): string => {
        const botTitleMap: Record<string, string> = {
            yellow_bot: 'Megabot',
            white_bot: 'Defence',
            green_bot: 'Defence',
            red_bot: 'Attack',
            blue_bot: 'Balance',
            orange_bot: 'Attack',
        };

        const bot = bots.find((bot) => bot.name === name);
        if (!bot) return 'no data';

        const botName = botTitleMap[name];
        return botName;
    };

    const fullData = useMemo(generateRandomData, [
        currentBot,
        currentTimeRange,
    ]);

    useEffect(() => {
        localStorage.setItem('currentTimeRange', currentTimeRange);
        if (currentBot) {
            localStorage.setItem('currentBot', currentBot);
        }
    }, [currentTimeRange, currentBot]);

    return (
        <div>
            <div className="app">
                <div className="header">
                    <button className="header__btn btn btn--iconed">
                        <img
                            className="btn__pic"
                            src="./img/icons/options.svg"
                            alt="options"
                        />
                    </button>
                    <h1 className="header__page-title title">Dashboard</h1>
                    <button className="header__btn btn btn--iconed">
                        <img
                            className="btn__pic"
                            src="./img/icons/refresh.svg"
                            alt="refresh"
                        />
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
                                    {balance}
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
                                    {on_hold}
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
                        {/* Some price change graph */}
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={fullData}>
                                <defs>
                                    <linearGradient
                                        id="colorValue"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor="#0ea5e9"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="#0ea5e9"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="date" stroke="#4b5563" />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#0ea5e9"
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
                                            title={getBotTitle(botName)}
                                            profit={getBotProfit(botName)}
                                            onClick={() =>
                                                setCurrentBot(botName)
                                            }
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="controls">
                        <span className="controls__title">Time range:</span>
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
                                <img
                                    className="btn__pic"
                                    src="./img/icons/bullets.svg"
                                    alt="bullets"
                                ></img>
                                <span className="btn__label">Dashboard</span>
                            </button>
                        </li>
                        <li className="footer__item">
                            <button className="footer__btn btn btn--nav">
                                <img
                                    className="btn__pic"
                                    src="./img/icons/chart.svg"
                                    alt="chart"
                                ></img>
                                <span className="btn__label">Megabot</span>
                            </button>
                        </li>
                        <li className="footer__item">
                            <button className="footer__btn btn btn--nav">
                                <img
                                    className="btn__pic"
                                    src="./img/icons/cart.svg"
                                    alt="cart"
                                ></img>
                                <span className="btn__label">Bot market</span>
                            </button>
                        </li>
                        <li className="footer__item">
                            <button className="footer__btn btn btn--nav">
                                <img
                                    className="btn__pic"
                                    src="./img/icons/dollar.svg"
                                    alt="dollar"
                                ></img>
                                <span className="btn__label">Coin Prices</span>
                            </button>
                        </li>
                        <li className="footer__item">
                            <button className="footer__btn btn btn--nav">
                                <img
                                    className="btn__pic"
                                    src="./img/icons/settings.svg"
                                    alt="settings"
                                ></img>
                                <span className="btn__label">Profile</span>
                                <div className="btn__mark">3</div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
