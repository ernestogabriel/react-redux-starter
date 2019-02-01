import React from 'react';

import placeholderImg from '../../images/placeholder-img.jpg';

const GroceryPage = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={placeholderImg}
                            className="img-fluid rounded float-left"
                            alt="placeholder"
                            style={{height: '300px'}}/>
                        <p>
                            {
                                `
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus accumsan a ipsum id mattis. Morbi ultrices, mi suscipit egestas lobortis,
                                leo eros faucibus nibh, quis ultrices mauris purus nec urna.
                                Fusce fringilla leo a tempor gravida. Pellentesque a orci eu nisl consectetur
                                fermentum at at massa. Integer efficitur, massa ut porta rhoncus, lorem justo
                                eleifend quam, vel vehicula ligula leo quis leo. Mauris tempor quis velit in mattis.
                                Phasellus ex sapien, venenatis sit amet velit vitae, rhoncus consectetur quam.
                                Praesent dapibus augue et orci egestas, a rutrum urna aliquam.
                            `
                            }
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export { GroceryPage };