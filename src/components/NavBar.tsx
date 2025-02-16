import React from 'react';

import {
    BulletsIcon,
    ChartIcon,
    CartIcon,
    DollarIcon,
    SettingsIcon,
} from '@/components/icons';
const NavBar: React.FC = () => {
    return (
        <div className="navbar">
            <button className="navbar__btn btn btn--nav btn--nav-selected">
                <BulletsIcon className="btn__pic" />
                <span className="btn__label">Dashboard</span>
            </button>
            <button className="navbar__btn btn btn--nav">
                <ChartIcon className="btn__pic" />
                <span className="btn__label">Megabot</span>
            </button>
            <button className="navbar__btn btn btn--nav">
                <CartIcon className="btn__pic" />
                <span className="btn__label">Bot market</span>
            </button>
            <button className="navbar__btn btn btn--nav">
                <DollarIcon className="btn__pic" />
                <span className="btn__label">Coin Prices</span>
            </button>
            <button className="navbar__btn btn btn--nav">
                <SettingsIcon className="btn__pic" />
                <span className="btn__label">Profile</span>
                <div className="btn__mark">3</div>
            </button>
        </div>
    );
};

export default NavBar;
