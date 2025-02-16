import React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    ReferenceLine,
} from 'recharts';
import { getVerticalLines } from '@/utils/getVerticalLines';

interface IChartProps {
    fullData: { date: string; value: number }[];
}

const Chart: React.FC<IChartProps> = ({ fullData }) => {
    return (
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
                                Math.max(...fullData.map((d) => d.value))
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
    );
};

export default Chart;
