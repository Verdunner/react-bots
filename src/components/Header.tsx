import React from 'react';

import { OptionsIcon, RefreshIcon } from '@/components/icons';

const Header: React.FC = () => {
    return (
        <div className="header">
            <button className="header__btn btn btn--iconed btn--iconed-enlarged">
                <OptionsIcon className="btn__pic" />
            </button>
            <h1 className="header__title">Dashboard</h1>
            <button className="header__btn btn btn--iconed">
                <RefreshIcon className="btn__pic" />
            </button>
        </div>
    );
};

export default Header;
