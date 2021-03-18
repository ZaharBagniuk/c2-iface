import React from 'react';
import {withNamespaces} from 'react-i18next';
import './ItemContent.css';

const ItemContent = ({t, item}) => {
    return (
        <div className="item-content">
            <span className="column status-icon">
                <i className={`${item.status === 'Active' ?
                    'fas fa-check-circle' : 'fas fa-times-circle'}`}
                />
            </span>
            <span className="column id">
                <span className="title">{t('id')}</span>
                <span className="id">{item.id}</span>
            </span>
            <span className="column name">
                <span className="title">{t('name')}</span>
                <span className="name">{item.name}</span>
            </span>
            <span className="column description">
                <span className="title">{t('description')}</span>
                <span className="description">{item.description}</span>
            </span>
            <span className="column child-count">
                <span className="title">{t('childCount')}</span>
                <span className="child-count">{item.children.length || 0}</span>
            </span>
        </div>
    );
};

export default withNamespaces()(ItemContent);