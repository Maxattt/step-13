import React from 'react';

const ItemStatusFilter = () => {

    return (
        <div className={"btn-group"}>
            <button type={"button"}
                    className={"btn btn-info"}>All list</button>
            <button type={"button"}
                    className={"btn btn-outline-secondary"}>Active list</button>
            <button type={"button"}
                    className={"btn btn-outline-secondary"}>Done</button>
        </div>
    );
};

export default ItemStatusFilter;