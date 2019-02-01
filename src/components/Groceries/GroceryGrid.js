import React from 'react';

import { GroceryCard } from './GroceryCard';

const GroceryGrid = () => {
    return (
        <div className="row">
            <div className="col-sm">
                <GroceryCard />
            </div>
            <div className="col-sm">
                <GroceryCard />
            </div>
            <div className="col-sm">
                <GroceryCard />
            </div>
        </div>
    );
};


export { GroceryGrid };