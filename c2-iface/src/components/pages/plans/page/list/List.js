import React from 'react';
import ItemContent from "./item-content/ItemContent";

const List = ({plans}) => {
    const renderList = () => {
        return plans.map(item => {
            return (
                <li key={item.id} className="list-group-item" style={{paddingLeft: '0'}}>
                    <ItemContent item={item} />
                </li>
            );
        });
    };

    return (
        <ul className="list-group list-group-flush">
            {renderList()}
        </ul>
    );
};

export default List;