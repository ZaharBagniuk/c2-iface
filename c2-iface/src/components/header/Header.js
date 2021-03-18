import React from 'react';
import {withNamespaces} from 'react-i18next';
import './Header.css';

const Header = props => {
    return (
        <div className="header">
            <i className="logo" />
            <h1>{props.t('administration')}</h1>
        </div>
    );
};

export default withNamespaces()(Header);