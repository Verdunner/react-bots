import React from 'react';
import { useState } from 'react';
import { RefreshCw, Menu, HelpCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
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
        <div className="min-h-screen bg-slate-900 text-gray-100 p-4">
            <div className="flex justify-between items-center mb-8">
                <Menu className="w-6 h-6" />
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <RefreshCw className="w-6 h-6" />
            </div>

            <div className="mb-8">
                <div className="text-gray-400 mb-2">TRADING CAPITAL</div>
                <div className="text-4xl font-bold mb-2">1.00865 BTC</div>
                <div className="flex gap-8">
                    <div>
                        <div className="text-gray-400">BALANCE:</div>
                        <div className="flex items-center gap-2">
                            10 850
                            <HelpCircle className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-400">ON HOLD:</div>
                        <div className="flex items-center gap-2">
                            24 000
                            <HelpCircle className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-48 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
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
                <div className="text-green-400 text-2xl font-bold">+32.6%</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                {botData.map((bot, index) => (
                    <div key={index} className="bg-slate-800 p-4 rounded-lg">
                        <div className={`text-4xl mb-2 ${bot.color}`}>
                            {bot.icon}
                        </div>
                        <div className="text-sm">{bot.name}</div>
                        <div className={bot.color}>{bot.value}</div>
                    </div>
                ))}
            </div>

            <div className="mb-8">
                <div className="text-gray-400 mb-2">Time Range:</div>
                <div className="flex gap-2">
                    {timeRanges.map((range) => (
                        <button
                            key={range}
                            className={`px-4 py-2 rounded-full ${
                                timeRange === range
                                    ? 'bg-slate-700'
                                    : 'bg-slate-800'
                            }`}
                            onClick={() => setTimeRange(range)}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-slate-800 p-4">
                <div className="flex justify-between">
                    {navItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-sm">{item}</div>
                            {item === 'Profile' && (
                                <div className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    3
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
