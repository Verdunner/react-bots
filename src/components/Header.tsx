import React from 'react';
import '@/styles/components/header.scss';
import { OptionsIcon, RefreshIcon } from '@/components/icons';

const Header = () => {
    return (
        <div className="header">
            <button className="header__btn btn btn--iconed btn--iconed-enlarged">
                <OptionsIcon className="btn__pic" />
            </button>
            <h1 className="header__page-title title">Dashboard</h1>
            <button className="header__btn btn btn--iconed">
                <RefreshIcon className="btn__pic" />
            </button>
        </div>
    );
};

export default Header;
