import React from 'react';
import { useState } from 'react';
import { RefreshCw, Menu, HelpCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
// import Dashboard from '@/components/Dashboard';
import '@fontsource/open-sans/400.css';

const App = () => {
    const [timeRange, setTimeRange] = useState('All time');

    const data = [
        { date: '22.04', value: 800 },
        { date: '23.04', value: 1200 },
        { date: '24.04', value: 900 },
        { date: '25.04', value: 1100 },
        { date: '26.04', value: 1000 },
    ];

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
                    <button className="header__btn btn">functions</button>
                    <h1 className="header__page-title title">Dashboard</h1>
                    <button className="header__btn btn">update</button>
                </div>
                <div className="main">
                    <div className="capital">
                        <div className="capital__primary">1.00865 BTC</div>
                        <div className="capital__balance">10 850 coins</div>
                        <div className="capital__on-hold">24 000 coins</div>
                    </div>
                    <div className="chart">Some price change graph</div>
                    <div className="bots-panel">
                        Area where we tap bots to select them, or add a new bot
                    </div>
                    <div className="main__controls">
                        <span className="main__controls-title">
                            Select time range
                        </span>
                        <button className="main__controls-btn">24h</button>
                        <button className="main__controls-btn">7 days</button>
                        <button className="main__controls-btn">30 days</button>
                        <button className="main__controls-btn">All time</button>
                    </div>
                </div>
                <div className="footer">
                    <ul className="footer__items">
                        <li className="footer__item">
                            <button className="footer__btn btn btn--page">
                                Dashboard
                            </button>
                        </li>
                        <li className="footer__item">
                            <button className="footer__btn btn btn--page">
                                Megabot
                            </button>
                        </li>
                        <li className="footer__item">
                            <button className="footer__btn btn btn--page">
                                Bot market
                            </button>
                        </li>
                        <li className="footer__item">
                            <button className="footer__btn btn btn--page">
                                Coin Prices
                            </button>
                        </li>
                        <li className="footer__item">
                            <button className="footer__btn btn btn--page">
                                Profile
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
