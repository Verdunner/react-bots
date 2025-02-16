import React from 'react';
import { timeRanges } from '@/constants/constants';

type TControlsProps = {
    currentTimeRange: string;
    setCurrentTimeRange: (range: string) => void;
};

const Controls: React.FC<TControlsProps> = ({
    currentTimeRange,
    setCurrentTimeRange,
}) => {
    return (
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
    );
};

export default Controls;
