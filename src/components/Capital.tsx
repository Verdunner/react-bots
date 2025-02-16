import React from 'react';
import '@/styles/components/capital.scss';

interface ICapitalProps {
    tradingCapital: number;
    tradingCapitalCurrency: string;
    balance: number;
    onHold: number;
    formatBalance: (value: number) => string;
}

const Capital: React.FC<ICapitalProps> = ({
    tradingCapital,
    tradingCapitalCurrency,
    balance,
    onHold,
    formatBalance,
}) => {
    return (
        <div className="capital">
            <div className="capital__left">
                <div className="capital__title capital__title--primary title">
                    Trading capital
                </div>
                <div className="capital__sum capital__sum--primary">
                    {tradingCapital} {tradingCapitalCurrency}
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
                        />
                    </div>
                </div>
                <div className="capital__on-hold">
                    <div className="capital__title capital__title--on-hold title">
                        On hold:
                    </div>
                    <div className="capital__sum capital__sum--on-hold">
                        {formatBalance(onHold)}
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
