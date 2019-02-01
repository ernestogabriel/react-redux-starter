import React from 'react';

import placeholderImg from '../../images/placeholder-img.jpg';

const GroceryCard = () => {
    return (
        <div className="card">
            <img src={placeholderImg} className="card-img-top" alt="placeholder image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <a href="/grocery" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export { GroceryCard };