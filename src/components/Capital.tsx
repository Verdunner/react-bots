import React from 'react';

import formatBalance from '@/utils/formatBalance';
import jsonData from '@/constants/data.min.json';
const { trading_capital, trading_capital_currency, balance, on_hold } =
    jsonData;

const Capital: React.FC = () => {
    return (
        <div className="capital">
            <div className="capital__left">
                <div className="capital__title capital__title--primary">
                    Trading capital
                </div>
                <div className="capital__sum capital__sum--primary">
                    {trading_capital} {trading_capital_currency}
                </div>
            </div>
            <div className="capital__right">
                <div className="capital__title capital__title--primary">
                    &nbsp;
                </div>
                <div className="capital__balance">
                    <div className="capital__title capital__title--balance">
                        Balance:
                    </div>
                    <div className="capital__sum capital__sum--balance">
                        {formatBalance(balance)}
                        <img
                            className="capital__coin"
                            src="img/icons/coin.png"
                            alt="coins"
                        />
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
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Capital;
