import React from 'react';
import { useState } from 'react';
import { RefreshCw, Menu, HelpCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
// import Dashboard from '@/components/Dashboard';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

const App = () => {
    const [timeRange, setTimeRange] = useState('All time');

    type DataPoint = {
        date: string;
        value: number;
    };

    // const data: DataPoint[] = [
    //     { date: '22.04', value: 800 },
    //     { date: '23.04', value: 1200 },
    //     { date: '24.04', value: 900 },
    //     { date: '25.04', value: 1100 },
    //     { date: '26.04', value: 1000 },
    // ];

    // const generateRandomFullData = (baseData: DataPoint[]) => {
    //     const detailedData: DataPoint[] = [];

    //     for (let i = 0; i < baseData.length - 1; i++) {
    //         const start = baseData[i];
    //         const end = baseData[i + 1];

    //         for (let j = 0; j < 6; j++) {
    //             detailedData.push({
    //                 date: start.date,
    //                 value: Math.floor(Math.random() * (1200 - 800 + 1)) + 800,
    //             });
    //         }
    //     }

    //     detailedData.push(baseData[baseData.length - 1]);

    //     return detailedData;
    // };

    function generateRandomData() {
        const data = [];
        const startDate = new Date(2025, 3, 22); // 22 апреля

        for (let i = 0; i < 30; i++) {
            const currentDate = new Date(
                startDate.getTime() + (i * 24 * 60 * 60 * 1000) / 5
            ); // Равномерное распределение точек
            const formattedDate = `${currentDate
                .getDate()
                .toString()
                .padStart(2, '0')}.${(currentDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}`;
            const value = Math.floor(Math.random() * (1300 - 700 + 1)) + 700;

            data.push({ date: formattedDate, value });
        }

        return data;
    }

    const fullData = generateRandomData();
    console.log(fullData);

    const botData = [
        {
            name: 'ATTACK',
            color: 'text-orange-500',
            value: '-8.2%',
            icon: '👾',
        },
        {
            name: 'PLACE BOT HERE',
            color: 'text-gray-600',
            value: '',
            icon: '👾',
        },
        { name: 'BALANCE', color: 'text-cyan-400', value: '-3.7%', icon: '👾' },
        {
            name: 'DEFENCE',
            color: 'text-green-500',
            value: '+2.5%',
            icon: '👾',
        },
        {
            name: 'MEGABOT',
            color: 'text-yellow-400',
            value: '+3.6%',
            icon: '👾',
        },
        { name: 'ATTACK', color: 'text-red-500', value: '+13.7%', icon: '👾' },
    ];

    const timeRanges = ['24h', '7 days', '30 days', 'All time'];
    const navItems = [
        'Dashboard',
        'Megabot',
        'Bot market',
        'Coin prices',
        'Profile',
    ];
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
                                1.00865 BTC
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
                                    10 850
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
                                    24 000
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
                            <li className="bots__item">
                                <div className="bot">
                                    <div className="bot__image-wrapper">
                                        <img
                                            className="bot__image-pic"
                                            src="img/bots/bot_orange.png"
                                            alt="bot_orange"
                                        ></img>
                                    </div>
                                    <span className="bot__title">Attack</span>
                                    <span className="bot__profit bot__profit--alert">
                                        -8.2%
                                    </span>
                                </div>
                            </li>
                            <li className="bots__item">
                                <div className="bot">
                                    <div className="bot__image-wrapper">
                                        <img
                                            className="bot__image-pic"
                                            src="img/bots/bot_gray.png"
                                            alt="bot_gray"
                                        ></img>
                                    </div>
                                    <span className="bot__title bot__title--disabled">
                                        Place bot
                                        <br />
                                        here
                                    </span>
                                    <span className="bot__profit"></span>
                                </div>
                            </li>
                            <li className="bots__item">
                                <div className="bot">
                                    <div className="bot__image-wrapper">
                                        <img
                                            className="bot__image-pic"
                                            src="img/bots/bot_blue.png"
                                            alt="bot_blue"
                                        ></img>
                                    </div>
                                    <span className="bot__title">Balance</span>
                                    <span className="bot__profit bot__profit--alert">
                                        -3.7%
                                    </span>
                                </div>
                            </li>
                            <li className="bots__item">
                                <div className="bot">
                                    <div className="bot__image-wrapper">
                                        <img
                                            className="bot__image-pic"
                                            src="img/bots/bot_green.png"
                                            alt="bot_green"
                                        ></img>
                                    </div>
                                    <span className="bot__title">Defence</span>
                                    <span className="bot__profit">+2.5%</span>
                                </div>
                            </li>
                            <li className="bots__item">
                                <div className="bot">
                                    <div className="bot__image-wrapper">
                                        <img
                                            className="bot__image-pic bot__image-pic--big"
                                            src="img/bots/bot_yellow.png"
                                            alt="bot_yellow"
                                        ></img>
                                    </div>
                                    <span className="bot__title">Megabot</span>
                                    <span className="bot__profit">+3.6%</span>
                                </div>
                            </li>
                            <li className="bots__item">
                                <div className="bot">
                                    <div className="bot__image-wrapper">
                                        <img
                                            className="bot__image-pic"
                                            src="img/bots/bot_red.png"
                                            alt="bot_red"
                                        ></img>
                                    </div>
                                    <span className="bot__title">Attack</span>
                                    <span className="bot__profit">+13.7%</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="controls">
                        <span className="controls__title">Time range:</span>
                        <button className="controls__btn btn btn--regular">
                            24h
                        </button>
                        <button className="controls__btn btn btn--regular">
                            7 days
                        </button>
                        <button className="controls__btn btn btn--regular">
                            30 days
                        </button>
                        <button className="controls__btn btn btn--regular btn--regular-selected">
                            All time
                        </button>
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
