import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
//dependencies
//import placeholderImg from '../../images/placeholder-img.jpg';

const GroceryImg = (props) => {
    const placeHolderAlt = 'placeholder image';
    return (
        <Fragment>
            { props.img
                ? <img src={props.img} className="card-img-top" alt={props.alt || placeHolderAlt} />
                : <div className="grey-screen"></div>
            }
        </Fragment>
    );
};

const GroceryCard = ({data:{title, summary, img}}) => {
    return (
        <div className="card item-card">
            <div className="card-body">
                <GroceryImg img={img} alt={title}/>
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-max-height trunc-ellipsis">{summary}</p>
                <a href="/grocery" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

GroceryImg.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string
};

GroceryCard.propTypes = {
    data: PropTypes.object.isRequired
};

export { GroceryCard };